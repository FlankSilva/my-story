import { FC } from "react"
import { Container, Text, Title } from "./styles"

interface HistoryProfileProps {
  text: string;
}

export const HistoryProfile: FC<HistoryProfileProps> = ({ text }) => {
  return (
    <Container>
      <Title>MINHA HISTÓRIA PROFISSIONAL</Title>
      <Text>
        {text}
      </Text>
    </Container>
  )
}