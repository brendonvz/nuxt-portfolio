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
          readme: {
            text: string;
          } | null;
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
            readme: object(expression: "HEAD:README.md") {
              ... on Blob {
                text
              }
            }
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

    // Process the data to extract description from README if needed
    const processedData = {
      viewer: {
        repositories: {
          totalCount: response.data.viewer.repositories.totalCount,
          nodes: response.data.viewer.repositories.nodes.map(repo => {
            let description = repo.description;

            // If no description, try to extract from README
            if (!description && repo.readme?.text) {
              const readmeText = repo.readme.text;
              // Extract first paragraph or first line that looks like a description
              const lines = readmeText.split('\n').filter(line => line.trim());

              // Skip title lines (starting with #) and find first descriptive line
              for (const line of lines) {
                const trimmed = line.trim();
                if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('![') && trimmed.length > 20) {
                  description = trimmed.length > 150 ? trimmed.substring(0, 147) + '...' : trimmed;
                  break;
                }
              }
            }

            return {
              id: repo.id,
              name: repo.name,
              createdAt: repo.createdAt,
              description: description || 'No description available',
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