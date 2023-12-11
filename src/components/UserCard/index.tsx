import { Link } from 'react-router-dom'

import type { CSS } from '@stitches/react'
import { styled } from '@stitched'

import Flexbox from '@components/Flexbox'
import Text from '@components/Text'

import type { SearchItem } from '@store/repos'

// -> Types
// --------

interface UserCardProps extends JSX.IntrinsicAttributes {
  user: SearchItem
  order: number
  css?: CSS
}

// -> Elements
// -----------

const Container = styled(Link, {
  display: 'flex',
  width: '100%',
  maxWidth: 800,

  background: '$bgLight',
  borderRadius: 12,
  border: '1px solid transparent',
  transition: 'background-color 300ms ease',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '$bgLighter',
    border: '1px solid $borderLight'
  }
})

const Avatar = styled('div', {
  width: 70,
  height: 70,
  borderRadius: 8,

  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
})

// -> Component
// -------------

const UserCard = ({ user, ...props }: UserCardProps) => {
  const avatarCss = {
    backgroundImage: `url(${user.avatar_url})`
  }

  return (
    <Container
      className="user-card"
      to={`/user/${user.login}`}
      {...props}
    >
      <Flexbox>
        <Flexbox
          padding="10px"
          hAlign="center"
          vAlign="center"
        >
          <Avatar css={avatarCss} />
        </Flexbox>

        <Flexbox column gap="2" padding="10px 10px 10px 0">
          <Text size="lg">
            { user?.name }
          </Text>
          <Text>{ user?.login }</Text>
        </Flexbox>
      </Flexbox>
    </Container>
  )
}

UserCard.toString = () => '.user-card'

export default UserCard