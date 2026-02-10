import type { IAuthRepository } from './auth.repository'
import type { LoginCredentials, LoginEntity } from './login.entity'

export class LoginUseCase {
  constructor(private readonly repository: IAuthRepository) {}

  execute(credentials: LoginCredentials): Promise<LoginEntity> {
    return this.repository.login(credentials)
  }
}
