import type { LoginEntity } from '../domain/login.entity'
import type { LoginResponseDto } from './login.dto'

export const mapLoginDtoToEntity = (dto: LoginResponseDto): LoginEntity => ({
  accessToken: dto.accessToken,
  refreshToken: dto.refreshToken,
  userId: dto.userId,
  email: dto.email,
})
