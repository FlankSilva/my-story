import { FC } from "react"
import { Avatar } from "./Avatar"
import { HistoryProfile } from "./HistoryProfile"
import { Container, Name } from "./styles"

interface ProfileProps {
  text: string;
}

export const Profile: FC<ProfileProps> = ({ text }) => {
  return (
    <Container>
      <Avatar />
      <Name>FLANK MANOEL DA SILVA</Name>
      <HistoryProfile text={text} />
    </Container>
  )
}