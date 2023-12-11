import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import store from '@store'
import AppRoutes from './routes'

createRoot(document.getElementById('root') as Element)
  .render(
    <StrictMode>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </StrictMode>
  )
