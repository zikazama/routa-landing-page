import { useId, useMemo, useState } from 'react'
import styles from './Input.module.css'

interface InputProps {
  label: string
  placeholder?: string
  type?: 'text' | 'email' | 'password'
  name?: string
  value?: string
  onChange?: (value: string) => void
  required?: boolean
  disabled?: boolean
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Input({
  label,
  placeholder,
  type = 'text',
  name,
  value,
  onChange,
  required = false,
  disabled = false,
}: InputProps) {
  const id = useId()
  const [internalValue, setInternalValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')

  const currentValue = value ?? internalValue
  const inputType = type === 'password' && showPassword ? 'text' : type

  const hasValue = useMemo(() => currentValue.trim().length > 0, [currentValue])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value
    setInternalValue(nextValue)
    onChange?.(nextValue)

    if (type === 'email' && error) {
      const isValid = emailPattern.test(nextValue)
      setError(isValid || nextValue.length === 0 ? '' : 'Format email tidak valid.')
    }
  }

  const handleBlur = () => {
    setIsFocused(false)

    if (type === 'email') {
      const isValid = emailPattern.test(currentValue)
      setError(isValid || currentValue.length === 0 ? '' : 'Format email tidak valid.')
    }
  }

  return (
    <div className={styles.field}>
      <div className={styles.inputWrapper}>
        <input
          id={id}
          name={name}
          type={inputType}
          placeholder={placeholder ?? ' '}
          className={`${styles.input} ${error ? styles.inputError : ''}`}
          value={currentValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          required={required}
          disabled={disabled}
        />
        <label
          htmlFor={id}
          className={`${styles.floatingLabel} ${isFocused || hasValue ? styles.labelRaised : ''}`}
        >
          {label}
        </label>

        {type === 'password' && (
          <button
            type="button"
            className={styles.eyeButton}
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? 'Sembunyikan password' : 'Tampilkan password'}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M17.883 19.297A10.95 10.95 0 0 1 12 21c-5.392 0-9.878-3.88-10.818-9A11 11 0 0 1 4.52 5.935L1.394 2.808l1.414-1.414l19.799 19.798l-1.414 1.415zM5.936 7.35A8.97 8.97 0 0 0 3.223 12a9.005 9.005 0 0 0 13.201 5.838l-2.028-2.028A4.5 4.5 0 0 1 8.19 9.604zm6.978 6.978l-3.242-3.241a2.5 2.5 0 0 0 3.241 3.241m7.893 2.265l-1.431-1.431A8.9 8.9 0 0 0 20.778 12A9.005 9.005 0 0 0 9.552 5.338L7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.95 10.95 0 0 1-2.012 4.593m-9.084-9.084Q11.86 7.5 12 7.5a4.5 4.5 0 0 1 4.492 4.778z"
                />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
                />
              </svg>
            )}
          </button>
        )}
      </div>

      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}
