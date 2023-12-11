import { styled } from '@stitched'
import * as icons from '@static/icons'

// -> Types
// --------

type IconName = keyof typeof icons

type IconProps = {
  icnName: IconName,
  size?: number | string
}

// -> ELements
// -----------

const IconWrapper = styled('div', {
  display: 'flex',

  '& > svg': { fill: '$fg50' }
})

// -> Component
// ------------

const Icon = (props: IconProps) => {
  const IconSVG = icons[props.icnName] || <span />
  const StyledIcon = styled(IconSVG, {
    width: +(props.size || 18),
    height: +(props.size || 18)
  })

  return (
    <IconWrapper className="icon-wrapper">
      <StyledIcon />
    </IconWrapper>
  )
}

Icon.toString = () => '.icon-wrapper'
export default Icon
