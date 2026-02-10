import type { LoginCredentials, LoginEntity } from './login.entity'

export interface IAuthRepository {
  login(credentials: LoginCredentials): Promise<LoginEntity>
}
