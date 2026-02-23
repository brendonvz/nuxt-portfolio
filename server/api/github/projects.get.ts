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
          readmeLower: {
            text: string;
          } | null;
          readmeMixed: {
            text: string;
          } | null;
          readmeTxt: {
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
            readmeLower: object(expression: "HEAD:readme.md") {
              ... on Blob {
                text
              }
            }
            readmeMixed: object(expression: "HEAD:README.MD") {
              ... on Blob {
                text
              }
            }
            readmeTxt: object(expression: "HEAD:README") {
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

    // Prefer repo description, then try README fallback.
    const processedData = {
      viewer: {
        repositories: {
          totalCount: response.data.viewer.repositories.totalCount,
          nodes: response.data.viewer.repositories.nodes.map(repo => {
            let description = repo.description?.trim() || null;
            const hasUsableRepoDescription =
              Boolean(description) &&
              description?.toLowerCase() !== 'no description available';

            if (!hasUsableRepoDescription) {
              const readmeText =
                repo.readme?.text ||
                repo.readmeLower?.text ||
                repo.readmeMixed?.text ||
                repo.readmeTxt?.text;

              if (!readmeText) {
                return {
                  id: repo.id,
                  name: repo.name,
                  createdAt: repo.createdAt,
                  description,
                  url: repo.url
                };
              }

              const lines = readmeText.split('\n').map(line => line.trim()).filter(Boolean);
              let inCodeBlock = false;
              for (const line of lines) {
                if (line.startsWith('```')) {
                  inCodeBlock = !inCodeBlock;
                  continue;
                }

                if (inCodeBlock) {
                  continue;
                }

                if (
                  line.startsWith('#') ||
                  line.startsWith('![') ||
                  line.startsWith('[![') ||
                  line.startsWith('<img') ||
                  line.startsWith('http')
                ) {
                  continue;
                }

                const trimmed = line.trim();
                if (
                  trimmed &&
                  trimmed.length > 20
                ) {
                  description =
                    trimmed.length > 150 ? `${trimmed.substring(0, 147)}...` : trimmed;
                  break;
                }
              }
            }

            return {
              id: repo.id,
              name: repo.name,
              createdAt: repo.createdAt,
              description: description?.trim() || null,
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
