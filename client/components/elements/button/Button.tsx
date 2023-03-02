import type { ButtonHTMLAttributes, ReactNode } from 'react'

import style from './Button.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export function Button({
  children,
  className,
  type = 'button',
  ...props
}: ButtonProps): JSX.Element {
  const classes = [style.button, className].filter(Boolean)

  return (
    <button {...props} type={type} className={classes.join(' ')}>
      {children}
    </button>
  )
}
