<script setup>
import { gql } from '@apollo/client/core'

const query = gql`
{
  viewer {
    repositories(first: 6, orderBy: {field: CREATED_AT, direction: DESC}) {
      totalCount
      nodes {
        id
        name
        createdAt
        description
        url
        forks {
          totalCount
        }
        watchers {
          totalCount
        }
        stargazers {
          totalCount
        }
      }
    }
  }
}
`

// Use the useAsyncQuery hook properly
const { data, error, pending } = useAsyncQuery(query);
</script>

<template>
  <h1 class="text-3xl my-8">Projects</h1>
  <p class="text-lg mb-8">Here are some of my projects on GitHub.</p>

  <!-- Show loading state while waiting for the data -->
  <div v-if="pending">Loading...</div>

  <!-- Show error message if the query fails -->
  <div v-if="error">{{ error.message }}</div>

  <!-- Show the list of projects once data is available -->
  <section class="grid grid-cols-2 gap-10" v-if="data?.viewer?.repositories?.nodes">
    <div v-for="project in data.viewer.repositories.nodes" :key="project.id"
      class="p-8 border-4 my-4 rounded-lg hover:bg-gray-50">
      <a :href="project.url" target="_blank">
        <h2 class="text-2xl text-indigo-800 font-semibold mb-2 hover:underline">{{ project.name }}</h2>
      </a>
      <p>{{ project.description }}</p>
      <div class="mt-4">
        <Icon name="fontisto:star" size="1.1rem" class="text-indigo-700" /> Stars: {{ project.stargazers.totalCount }}
        <Icon name="system-uicons:branch" size="1.1rem" class="text-indigo-800" /> Forks: {{ project.forks.totalCount }}
        <Icon name="system-uicons:eye" size="1.1rem" class="text-indigo-700" /> Watchers: {{ project.watchers.totalCount }}
      </div>
    </div>
  </section>

  <!-- Handle case where no projects are available -->
  <div v-else>No projects found.</div>
</template>
