import type { PropsWithChildren } from 'react'
import { AuthUseCaseContext } from '../../hooks/authUseCase.context'
import type { LoginUseCase } from '../../../domain/login.usecase'

interface AuthUseCaseProviderProps extends PropsWithChildren {
  loginUseCase: LoginUseCase
}

export const AuthUseCaseProvider = ({ loginUseCase, children }: AuthUseCaseProviderProps) => (
  <AuthUseCaseContext.Provider value={loginUseCase}>{children}</AuthUseCaseContext.Provider>
)
