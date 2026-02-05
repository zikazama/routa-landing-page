import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ComingSoon from '../../features/marketing/ui/pages/ComingSoon'
import HomePage from '../../features/marketing/ui/pages/HomePage'
import LoginPage from '../../features/auth/ui/pages/LoginPage'

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ComingSoon />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
)

export default AppRouter
