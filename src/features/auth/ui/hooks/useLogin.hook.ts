import { useCallback, useState } from 'react'
import type { LoginCredentials } from '../../domain/login.entity'
import type { LoginUseCase } from '../../domain/login.usecase'

interface UseLoginResult {
  login: (values: LoginCredentials) => Promise<void>
  isLoading: boolean
  error: string | null
}

export const useLogin = (useCase: LoginUseCase): UseLoginResult => {
  const authUseCase = useCase
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = useCallback(
    async (values: LoginCredentials) => {
      setIsLoading(true)
      setError(null)

      try {
        await authUseCase.execute(values)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Login failed')
      } finally {
        setIsLoading(false)
      }
    },
    [authUseCase]
  )

  return { login, isLoading, error }
}
