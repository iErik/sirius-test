import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from '@store'

import {
  fetchUser,
  fetchRepos,
  paginateRepos,
  updateRepoPagination
} from '@store/repos'

import { styled } from '@stitched'
import InfiniteScroll from 'react-infinite-scroll-component'

import UserBanner from '@components/UserBanner'
import RepoCard from '@components/RepoCard'
import Flexbox from '@components/Flexbox'
import Select from '@components/Select'

// -> Elements
// -----------

const MainContainer = styled('div', {
  width: '100%',
  height: '100%',
  overflow: 'auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: '200px 10px 100px 10px'
})

const ReposContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  width: '100%',

  '& > div': {
    width: '100%',
    maxWidth: 800
  }
})

const ReposHeader = styled('div', {
  display: 'flex',
  marginBottom: 30
})

// -> View
// -------

type OptionType = {
  value: string
  label: string
}

const RepoList = ({
  repos
}: { repos: any[ ]}) => {
  const { sort, order, hasNextPage } = useSelector(state =>
    state.repos?.reposPagination)
  const { username } = useParams()
  const dispatch = useDispatch()

  const onPaginate = () => dispatch(paginateRepos())

  const updateCriteria = ({ value }: OptionType) => {
    dispatch(updateRepoPagination({ sort: value }))
    if (username) dispatch(fetchRepos(username))
  }

  const updateOrder = ({ value }: OptionType) => {
    dispatch(updateRepoPagination({ order: value }))
    if (username) dispatch(fetchRepos(username))
  }


  const criteriaOptions = [
    { value: 'stars', label: 'Número de estrelas' },
    { value: 'forks', label: 'Número de forks' },
    { value: 'updated', label: 'Data de atualização' }
  ]

  const orderOptions = [
    { value: 'asc', label: 'Ascendente' },
    { value: 'desc', label: 'Descendente' },
  ]

  return (
    <ReposContainer>
      <ReposHeader>
        <Flexbox hExpand hAlign="spaceBetween">
          <Flexbox column grow vAlign="top" gap="5">
            <Select
              options={criteriaOptions}
              placeholder="Ordenar por..."
              value={criteriaOptions.find(o => o.value === sort)}
              onChange={v => updateCriteria(v as OptionType)}
            />
          </Flexbox>

          <Flexbox grow column vAlign="bottom" gap="5">
            <Select
              options={orderOptions}
              placeholder="Ordenação"
              value={orderOptions.find(o => o.value === order)}
              onChange={v => updateOrder(v as OptionType)}
            />
          </Flexbox>
       </Flexbox>
      </ReposHeader>

      <InfiniteScroll
        dataLength={repos?.length}
        next={onPaginate}
        hasMore={hasNextPage}
        loader={<span />}
        scrollableTarget="details-container"
      >
        {
          repos.map(repo =>
            <RepoCard
              repo={repo}
              key={repo?.id}
              css={{
                '&:not(:last-child)': { marginBottom: 15 }
              }}
            />
          )
        }
      </InfiniteScroll>
    </ReposContainer>
  )
}

const UserDetails = () => {
  const { username } = useParams()
  const dispatch = useDispatch()

  const user = useSelector(state => state.repos
    ?.userDetails)
  const repos = useSelector(state => state.repos?.repos)

  useEffect(() => {
    if (!username) return 

    dispatch(fetchUser(username))
    dispatch(fetchRepos(username))
  }, [ username, dispatch ])

  return (
    <MainContainer id="details-container">
      { user ? <UserBanner user={user} /> : null }
      { repos ? <RepoList repos={repos} /> : null }
    </MainContainer>
  )
}

export default UserDetails