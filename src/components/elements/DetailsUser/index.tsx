import { Container, Content, Detail, Label, Value, Title } from "./styles"

import { FC } from "react"

interface DetailsUserProps {
  data: any;
}

interface DataProps {
  name: string
  email: string
  whatsapp: string
  subject: string
  hobbys: string[]
  preference: string
  contact: string
}

export const DetailsUser: FC<DetailsUserProps> = ({ data }) => {
  return (
    <Container>
      <Title>Resultado do Form acima</Title>
      <Content>
        <Detail>
          <Label>
            Nome:
          </Label>
          <Value>
            {data?.name}
          </Value>
        </Detail>

        <Detail>
          <Label>
            E-Mail:
          </Label>
          <Value>
            {data?.email}
          </Value>
        </Detail>
        <Detail>
          <Label>
            WhatsApps:
          </Label>
          <Value>
            {data?.whatsapp}
          </Value>
        </Detail>
        <Detail>
          <Label>
            Assunto:
          </Label>
          <Value>
            {data?.subject}
          </Value>
        </Detail>
        <Detail>
          <Label>
            Hobbys:
          </Label>
          <Value>
            {data?.hobbys?.map((hobby) => `${hobby}, `)}
          </Value>
        </Detail>
        <Detail>
          <Label>
            Gosto mais de atual com:
          </Label>
          <Value>
            {data?.preference}
          </Value>
        </Detail>
        <Detail>
          <Label>
            Prefere contato por:
          </Label>
          <Value>
            {data?.contact}
          </Value>
        </Detail>
      </Content>
    </Container>
  )
}