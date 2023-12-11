import { Outlet } from 'react-router-dom'
import { styled, globalStyle } from '@stitched'

// -> Elements
// -----------

const Container = styled('div', {
  width: '100%',
  height: '100%',
})

const App = () => {
  globalStyle()

  return (
    <Container>
      <Outlet />
    </Container>
  )
}

export default App
