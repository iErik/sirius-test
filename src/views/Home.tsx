import { useDispatch, useSelector } from '@store'
import { searchUsers, paginateUsers } from '@store/repos'

import { debounce } from 'lodash'
import { styled } from '@stitched'

import InfiniteScroll from 'react-infinite-scroll-component'
import TextInput from '@components/TextInput'
import Text from '@components/Text'

import UserCard from '@components/UserCard'

// -> Elements
// -----------

const MainContainer = styled('div', {
  width: '100%',
  height: '100%',

  padding: 10,
  overflow: 'auto'
})

const SearchBarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  flexShrink: 0,
  padding: '145px 0 80px 0'
})

const ResultsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '& > div': {
    width: '100%',
    maxWidth: 800
  }
})

const SearchBar = styled(TextInput, {
  marginTop: 40,
  width: '100%',
  maxWidth: 800
})

// -> Main
// -------

const Home = () => {
  const dispatch = useDispatch()
  const hasNextPage = useSelector(state =>
    state.repos.searchPagination.hasNextPage)
  const searchItems = useSelector(state =>
    state.repos.search)

  const onSearch = debounce((val: string) =>
    dispatch(searchUsers(val))
  , 300)

  const onPaginate = () => dispatch(paginateUsers())

  return (
    <MainContainer id="main-container">
      <SearchBarContainer>
        <Text type="h1" size="3xl">
          GitBox
        </Text>

        <SearchBar
          onInput={onSearch}
          placeholder="Pesquise por um usuário do Github :)"
        />
      </SearchBarContainer>

      <ResultsContainer>
        <InfiniteScroll
          dataLength={searchItems.length}
          next={onPaginate}
          hasMore={hasNextPage}
          loader={<span />}
          scrollableTarget="main-container"
          style={{ width: '100%' }}
        >
          {
            searchItems.map((item, idx) =>
              <UserCard
                user={item}
                key={item.id}
                order={idx}
                css={{
                  '&:not(:last-child)': { marginBottom: 15 }
                }}
              />)
          }
        </InfiniteScroll>
      </ResultsContainer>
    </MainContainer>
  )
}

export default Home