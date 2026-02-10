import AuthProvider from './app/providers/AuthProvider'
import AppRouter from './app/router/AppRouter'

const App = () => (
  <AuthProvider>
    <AppRouter />
  </AuthProvider>
)

export default App
