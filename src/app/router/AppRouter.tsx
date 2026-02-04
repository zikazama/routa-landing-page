import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ComingSoon from '../../features/marketing/ui/pages/ComingSoon'
import HomePage from '../../features/marketing/ui/pages/HomePage'

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ComingSoon />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
)

export default AppRouter
