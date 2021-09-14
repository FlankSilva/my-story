import { FC } from "react"
import { Container, Title } from "./styles"

interface HeaderProps {
  title: string;
  height?: string;
  margin?: string;
  size?: string;
}

export const Header: FC<HeaderProps> = ({ title, height, margin, size = '22px' }) => {
  return (
    <Container
      height={height}
      margin={margin}
    >
      <Title size={size}>{title}</Title>
    </Container>
  )
}