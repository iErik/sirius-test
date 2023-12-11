import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '@store'
import * as Search from '@services/Search'

// -> Types
// --------

export type Repo = {
  id: number
  clone_url: string
  description: string
  homepage: string
  html_url: string
  language: string
  name: string
  watchers: number
  url: string
  visibility: string
  topics: string[]
  stargazers_count: number
}

export type SearchItem = {
  avatar_url: string
  bio: null | string
  blog: null | string
  collaborators?: number
  company: null | string
  created_at: string
  disk_usage?: number
  email: string | null
  events_url: string
  followers: number
  followers_url: string
  following: number
  following_url: string
  gists_url: string
  gravatar_id: string | null
  hireable: boolean | null
  html_url: string
  id: number
  location: string | null
  login: string
  name: string | null
  node_id: string
  organizations_url: string
  owned_private_repos?: null | number
  private_gists?: number
  public_gists: number
  public_repos: number
  received_events_url: string
  repos_url: string
  score?: number
  site_admin: boolean
  starred_url: string
  subscriptions_url: string
  total_private_repo?: number
  twitter_username?: null | string
  two_factor_authentication?: boolean
  type: string
  updated_at: string
  url: string
}

export interface ReposState {
  currentPage: number
  //reposPage: number
  searchQuery: string
  userDetails: SearchItem | null
  repos: Array<any>
  users: Repo[]
  search: SearchItem[]

  reposPagination: {
    page: number
    sort: 'stars' | 'forks' | 'updated'
    order: 'asc' | 'desc'
    hasNextPage: boolean
  }
}

const initialState: ReposState = {
  currentPage: 1,
  reposPagination: {
    page: 1,
    sort: 'stars',
    order: 'desc',
    hasNextPage: false
  },
  searchQuery: '',
  userDetails: null,
  repos: [],
  users: [],
  search: []
}

// -> Thunks
// ---------

export const searchUsers = createAsyncThunk(
  'repos/searchUsers',
  async (query: string) => {
    const items = await Search.searchUsers(query)

    return { items, query }
  })

export const paginateUsers = createAsyncThunk(
  'repos/paginateUsers',
  (_, { getState }) => {
    const { repos } = getState() as { repos: ReposState } 

    return Search
      .searchUsers(repos.searchQuery, repos.currentPage + 1)
  })

export const fetchUser = createAsyncThunk(
  'repos/fetchUser',
  (username: string) => Search.fetchUser(username))

export const fetchRepos = createAsyncThunk(
  'repos/fetchRepos',
  (username: string, { getState }) => {
    const { repos } = getState() as { repos: ReposState } 
    const pag = repos.reposPagination || {}

    return Search.fetchUserRepos(username, pag)
  })

export const paginateRepos = createAsyncThunk(
  'repos/paginateRepos',
  (_, { getState }) => {
    const { repos } = getState() as { repos: ReposState } 
    const user = repos.userDetails?.login || ''
    const pag = repos.reposPagination || {}

    return Search.fetchUserRepos(user, {
      ...(pag || {}),
      page: pag.page + 1
    })
  })

// -> Slice
// --------

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  extraReducers (builder) {
    builder
      .addCase(searchUsers.fulfilled, (state, action) => {
        const { items, query } = action.payload || {}

        state.searchQuery = query
        state.currentPage = 1
        state.search = [
          ...(items as SearchItem[] || [])
        ]
      })
      .addCase(paginateUsers.fulfilled, (state, action) => {
        const items = action.payload || {}

        state.currentPage += 1
        state.search = [
          ...(state.search || []),
          ...(items || [])
        ]
      })
      .addCase(fetchRepos.fulfilled, (state, action) => {
        const {
          total_count: total,
          items
        } = action.payload?.data || {}

        state.reposPagination.page = 1
        state.repos = [ ...(items || []) ]
        state.reposPagination.hasNextPage =
          state.repos?.length < total
      })
      .addCase(paginateRepos.fulfilled, (state, action) => {
        const {
          total_count: total,
          items
        } = action.payload?.data || {}

        state.reposPagination.page += 1
        state.repos = [
          ...(state.repos || []),
          ...(items || [])
        ]
        state.reposPagination.hasNextPage =
          state.repos?.length < total
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        const userData = action.payload || null

        state.userDetails = userData
      })
  },
  reducers: {
    updateRepoPagination: (state: ReposState, action) => {
      state.reposPagination = {
        ...(state.reposPagination || {}),
        ...(action.payload || {})
      }
    }
  }
})

export const { updateRepoPagination } = reposSlice.actions
export default reposSlice.reducer
