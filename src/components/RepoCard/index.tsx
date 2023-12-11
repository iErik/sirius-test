import { styled } from '@stitched'
import type { CSS } from '@stitches/react'

import type { Repo } from '@store/repos'

import Flexbox from '@components/Flexbox'
import Text from '@components/Text'
import Icon from '@components/Icon'

// -> Types
// --------

interface RepoCardProps extends JSX.IntrinsicAttributes {
  repo: Repo
  css?: CSS
}

// -> Elements
// -----------

const Container = styled('a', {
  display: 'flex',
  alignItems: 'center',

  backgroundColor: '$bgLight',
  borderRadius: 12,
  border: '1px solid transparent',

  cursor: 'pointer',
  minHeight: 115,
  width: '100%',
  maxWidth: 800,

  padding: 10,

  transition: 'background-color 300ms ease',

  '&:hover': {
    backgroundColor: '$bgLighter',
    border: '1px solid $borderLight'
  }
})

const IcnWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  borderRadius: 10,
  backgroundColor: '$bgLighter',

  width: 55,
  height: 55,
  marginRight: 10,

  flexShrink: 0
})

// -> Component
// ------------

const RepoCard = ({
  repo,
  ...props
}: RepoCardProps) => {

  return (
    <Container
      className="repo-card"
      target="_blank"
      href={repo.html_url}
      {...props}
    >
      <IcnWrapper>
        <Icon
          icnName="repo"
          size="30"
        />
      </IcnWrapper>

      <Flexbox
        column
        gap="5"
        vAlign="top"
        hExpand
      >
        <Text weight="medium">{ repo?.name }</Text>
        <Text>{ repo?.description }</Text>
        <Text muted>{ repo?.language }</Text>
      </Flexbox>

      <Flexbox
        vAlign="center"
        gap="7"
        padding="0 10px"
      >
        <Text weight="medium" color="fg50">
          { repo?.stargazers_count }
        </Text>
        <Icon icnName="star" />
      </Flexbox>
    </Container>
  )
}

RepoCard.toString = () => 'div.repo-card'

export default RepoCard