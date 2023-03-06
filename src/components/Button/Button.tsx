import { FC } from 'react'
import styles from './Button.module.scss'

type ButtonProps = {
  onClick: () => void
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  category: string
  disabled?: boolean
  size?: string
  active?: boolean
}

const Button: FC<ButtonProps> = ({ onClick, children, type, category, disabled, size, active }) => {
  const cls = [styles.Button, styles[category]]

  if (size === 'small') {
    cls.push(styles.btnSmall)
  }

  if (size === 'x-small') {
    cls.push(styles.btnXSmall)
  }

  if (active) {
    cls.push(styles.active)
  }

  return (
    <>
      <button
        className={cls.join(' ')}
        type={type || 'button'}
        onClick={onClick}
        disabled={disabled}
        data-category={category || ''}
      >
        {children}
      </button>
    </>
  )
}

export default Button

Button.defaultProps = {
  size: '',
}
