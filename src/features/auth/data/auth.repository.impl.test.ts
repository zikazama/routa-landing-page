import axios from 'axios'
import { describe, expect, it, vi } from 'vitest'
import { AuthRepositoryImpl } from './auth.repository.impl'
import type { LoginCredentials } from '../domain/login.entity'
import type { LoginResponseDto } from './login.dto'

type AxiosPost = typeof axios.post

vi.mock('axios', () => ({
  default: {
    post: vi.fn(),
  },
}))

describe('AuthRepositoryImpl', () => {
  const credentials: LoginCredentials = {
    email: 'user@example.com',
    password: 'secret123',
    remember: true,
  }

  const dto: LoginResponseDto = {
    accessToken: 'access-token',
    refreshToken: 'refresh-token',
    userId: 'user-123',
    email: 'user@example.com',
  }

  it('posts credentials and returns mapped entity', async () => {
    const post = axios.post as AxiosPost
    post.mockResolvedValue({ data: dto })

    const repository = new AuthRepositoryImpl()

    await expect(repository.login(credentials)).resolves.toEqual({
      accessToken: 'access-token',
      refreshToken: 'refresh-token',
      userId: 'user-123',
      email: 'user@example.com',
    })

    expect(post).toHaveBeenCalledWith('/auth/login', credentials)
  })

  it('propagates errors from axios', async () => {
    const post = axios.post as AxiosPost
    const error = new Error('Network error')
    post.mockRejectedValue(error)

    const repository = new AuthRepositoryImpl()

    await expect(repository.login(credentials)).rejects.toBe(error)
  })
})
