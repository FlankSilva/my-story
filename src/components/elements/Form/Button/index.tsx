import { ButtonHTMLAttributes, FC, ReactNode } from "react"

import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button: FC<ButtonProps> = ({children, ...rest}) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}
