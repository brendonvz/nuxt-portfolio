interface GitHubResponse {
  data: {
    viewer: {
      repositories: {
        totalCount: number;
        nodes: Array<{
          id: string;
          name: string;
          createdAt: string;
          description: string | null;
          url: string;
        }>;
      };
    };
  };
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);

  if (!config.server.githubToken) {
    throw createError({
      statusCode: 500,
      statusMessage: 'GitHub token not configured'
    });
  }

  const GITHUB_QUERY = `
    query {
      viewer {
        repositories(
          first: 6,
          orderBy: { field: CREATED_AT, direction: DESC },
          privacy: PUBLIC,
          ownerAffiliations: OWNER,
          isFork: false
        ) {
          totalCount
          nodes {
            id
            name
            createdAt
            description
            url
          }
        }
      }
    }
  `;

  try {
    const response = await $fetch<GitHubResponse>('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.server.githubToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GITHUB_QUERY
      })
    });

    // Keep payload small and normalize null descriptions.
    const processedData = {
      viewer: {
        repositories: {
          totalCount: response.data.viewer.repositories.totalCount,
          nodes: response.data.viewer.repositories.nodes.map(repo => {
            return {
              id: repo.id,
              name: repo.name,
              createdAt: repo.createdAt,
              description: repo.description || 'No description available',
              url: repo.url
            };
          })
        }
      }
    };

    return processedData;
  } catch (error) {
    console.error('GitHub API error:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch GitHub projects'
    });
  }
});
