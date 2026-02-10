import type { PropsWithChildren } from 'react'
import { AuthRepositoryImpl } from '../../features/auth/data/auth.repository.impl'
import { LoginUseCase } from '../../features/auth/domain/login.usecase'
import { AuthUseCaseProvider } from '../../features/auth/ui/components/AuthUseCaseProvider/AuthUseCaseProvider'

const repository = new AuthRepositoryImpl()
const loginUseCase = new LoginUseCase(repository)

const AuthProvider = ({ children }: PropsWithChildren) => (
  <AuthUseCaseProvider loginUseCase={loginUseCase}>{children}</AuthUseCaseProvider>
)

export default AuthProvider
