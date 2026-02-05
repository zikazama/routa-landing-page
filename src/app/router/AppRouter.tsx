import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ComingSoon from '../../features/marketing/ui/pages/ComingSoon'
import HomePage from '../../features/marketing/ui/pages/HomePage'
import LoginPage from '../../features/auth/ui/pages/LoginPage'
import RegisterPage from '../../features/auth/ui/pages/RegisterPage'

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ComingSoon />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  </BrowserRouter>
)

export default AppRouter
