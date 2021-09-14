import { FC } from "react"
import parser from 'html-react-parser'
import { Container, Text, Title } from "./styles"

interface HistoryProfileProps {
  text: string;
}

export const HistoryProfile: FC<HistoryProfileProps> = ({ text }) => {
  return (
    <Container>
      <Title>MINHA HISTÓRIA PROFISSIONAL</Title>
      <Text>
        {parser(text)}
      </Text>
    </Container>
  )
}