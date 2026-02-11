import type { IAuthRepository } from '../domain/auth.repository'
import type { LoginCredentials, LoginEntity } from '../domain/login.entity'
import type { LoginResponseDto } from './login.dto'
import { mapLoginDtoToEntity } from './login.mapper'
import { httpPost } from '../../../lib/http'

export class AuthRepositoryImpl implements IAuthRepository {
  async login(credentials: LoginCredentials): Promise<LoginEntity> {
    const response = await httpPost<LoginResponseDto, LoginCredentials>('/auth/login', credentials)
    return mapLoginDtoToEntity(response)
  }
}
