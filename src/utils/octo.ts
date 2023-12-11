import { Octokit } from '@octokit/core'

const { VITE_GIT_TOKEN: authToken } = import.meta.env

const octokit = new Octokit({
  auth: authToken
})

export default octokit