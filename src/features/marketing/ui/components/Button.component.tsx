import style from './Button.module.css'

interface ButtonProps {
  variant?: 'primary' | 'outline'
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export default function Button({
  variant = 'primary',
  children,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const variantClass = variant === 'outline' ? style['btn-outline'] : style['btn-primary']

  return (
    <button type={type} className={`${style.btn} ${variantClass} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
