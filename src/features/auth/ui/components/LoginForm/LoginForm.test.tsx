import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import LoginForm from './LoginForm'

describe('LoginForm', () => {
  it('submits email, password, and remember flag', async () => {
    const user = userEvent.setup()
    const login = vi.fn()

    render(<LoginForm login={login} isLoading={false} error={null} />)

    await user.type(screen.getByLabelText('Email'), 'user@example.com')
    await user.type(screen.getByLabelText('Password'), 'secret123')
    await user.click(screen.getByLabelText('Biarkan saya tetap masuk'))
    await user.click(screen.getByRole('button', { name: 'Masuk' }))

    expect(login).toHaveBeenCalledWith({
      email: 'user@example.com',
      password: 'secret123',
      remember: true,
    })
  })

  it('does not submit while loading', async () => {
    const user = userEvent.setup()
    const login = vi.fn()

    render(<LoginForm login={login} isLoading error={null} />)

    await user.click(screen.getByRole('button', { name: 'Memuat...' }))

    expect(login).not.toHaveBeenCalled()
  })

  it('disables inputs while loading', () => {
    render(<LoginForm login={vi.fn()} isLoading error={null} />)

    expect(screen.getByLabelText('Email')).toBeDisabled()
    expect(screen.getByLabelText('Password')).toBeDisabled()
  })

  it('shows error message when provided', () => {
    render(<LoginForm login={vi.fn()} isLoading={false} error="Login gagal" />)

    expect(screen.getByRole('alert')).toHaveTextContent('Login gagal')
  })

  it('does not submit when required fields are empty', async () => {
    const user = userEvent.setup()
    const login = vi.fn()

    render(<LoginForm login={login} isLoading={false} error={null} />)

    await user.click(screen.getByRole('button', { name: 'Masuk' }))

    expect(login).not.toHaveBeenCalled()
  })
})
