import { describe, expect, it } from 'vitest'
import { mapLoginDtoToEntity } from './login.mapper'
import type { LoginEntity } from '../domain/login.entity'
import type { LoginResponseDto } from './login.dto'

describe('mapLoginDtoToEntity', () => {
  it('maps login response DTO to entity', () => {
    const dto: LoginResponseDto = {
      accessToken: 'access-token',
      refreshToken: 'refresh-token',
      userId: 'user-123',
      email: 'user@example.com',
    }

    const expected: LoginEntity = {
      accessToken: 'access-token',
      refreshToken: 'refresh-token',
      userId: 'user-123',
      email: 'user@example.com',
    }

    expect(mapLoginDtoToEntity(dto)).toEqual(expected)
  })
})
