import { styled } from '@stitched'

import Flexbox from '@components/Flexbox'
import Text from '@components/Text'

import type { SearchItem } from '@store/repos'

// -> Types
// --------

interface UserBannerProps extends JSX.IntrinsicAttributes {
  user: SearchItem
}

// -> Elements
// -----------

const Avatar = styled('div', {
  width: 130,
  height: 130,
  flexShrink: 0,
  borderRadius: 12,

  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
})

const MainContainer = styled('div', {
  display: 'flex',

  borderBottom: '1px solid #3A3A3A',

  paddingBottom: 40,
  marginBottom: 20,

  width: '100%',
  maxWidth: 800,

  [`& > ${Avatar}`]: { marginRight: 20 },

  '@mobile': {
    flexDirection: 'column',
    alignItems: 'center',

    [`& > ${Avatar}`]: { marginBottom: 50 }
  }
})

// -> Component
// ------------

const UserBanner = ({
  user,
  ...props
}: UserBannerProps) => {
  const avatarCss = {
    backgroundImage: `url(${user.avatar_url})`
  }

  return (
    <MainContainer {...props}>
      <Avatar css={avatarCss} />

      <Flexbox column gap="0">
        <Text size="3xl">{ user?.name }</Text>
        <Text size="lg">{ user?.login }</Text>
        <Text size="base">{ user?.email }</Text>
        <Text size="base">{ user?.location }</Text>

        <Text>{ user?.bio }</Text>

        <Flexbox gap="10">
          <Flexbox gap="5">
            <Text weight="semiBold">{ user?.followers }</Text>
            <Text>seguidores</Text>
          </Flexbox>
          <Text weight="bold">·</Text>
          <Flexbox gap="5">
            <Text>seguindo</Text>
            <Text weight="semiBold">{ user?.following }</Text>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </MainContainer>
  )
}

export default UserBanner