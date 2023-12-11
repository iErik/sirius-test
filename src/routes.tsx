import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import App from '@/App'
import Home from '@views/Home'
import UserDetails from '@views/UserDetails'

const AppRoutes = () =>
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/user/:username"
          element={<UserDetails />}
        />
      </Route>
    </Routes>
  </BrowserRouter>

export default AppRoutes
