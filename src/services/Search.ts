//import http from '@utils/http'
import octo from '@utils/octo'
import { SearchItem } from '@store/repos'

export const fetchUser = async (username: string) => {
  const data = await octo
  .request('GET /users/{username}', { username })

  return data?.data || {} 
}


export type FetchRepoOpts = {
  page?: number
  sort?: 'stars' | 'forks' | 'updated'
  order?: 'asc' | 'desc'
}

export const fetchUserRepos = async (
  user: string,
  options: FetchRepoOpts = {}
) => {
  const data = await octo
    .request('GET /search/repositories', {
      q: `user:${user}`,
      ...(options || {})
    })

  return data
}

export const searchUsers = async (
  query: string,
  page: number = 1
)
  : Promise<SearchItem[]> => {
  const data = await octo.request('GET /search/users', {
    headers: {
      'X-Github-Api-Version': '2022-11-28',
      'Accept': 'application/vnd.github+json'
    },
    q: query,
    page
  })

  const items = await Promise.all(data?.data?.items
    ?.map(async item => {
      const fullData = await octo.request('GET /users/{username}', {
        username: item?.login
      })

      return {
        ...(item || {}),
        ...(fullData?.data || {})
      } as SearchItem
    }))

  return (items || []) as SearchItem[]
}