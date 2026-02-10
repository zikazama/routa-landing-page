import { createContext, useContext } from 'react'
import type { LoginUseCase } from '../../domain/login.usecase'

export const AuthUseCaseContext = createContext<LoginUseCase | null>(null)

export const useAuthUseCase = () => {
  const useCase = useContext(AuthUseCaseContext)

  if (!useCase) {
    throw new Error('AuthUseCaseProvider is missing')
  }

  return useCase
}
