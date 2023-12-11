import { styled } from '@stitched'

// -> Types
// --------

interface InputProps extends JSX.IntrinsicAttributes {
  onInput: Function
  placeholder?: string
}

// -> Elements
// -----------

const TextInputEl = styled('input', {
  background: '#D9D9D9',
  color: '#0D0D0D',
  cursor: 'text',

  fontWeight: '$medium',
  fontSize: '$lg',

  height: 65,
  borderRadius: 10,
  padding: '0 20px'
})

// -> Export
// ---------

const TextInput = ({
  onInput,
  ...props
}: InputProps): React.ReactElement => {

  const handleInput = (ev: React.FormEvent) => {
    ev.preventDefault()
    ev.stopPropagation()

    const target = ev.target as HTMLInputElement
    const val =  target?.value || ''

    onInput(val, ev)
  }

  return <TextInputEl onInput={handleInput} {...props} />
}

export default TextInput