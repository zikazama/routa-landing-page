export interface LoginCredentials {
  email: string
  password: string
  remember: boolean
}

export interface LoginEntity {
  accessToken: string
  refreshToken: string
  userId: string
  email: string
}
