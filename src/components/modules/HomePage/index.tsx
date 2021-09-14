import { FC, useRef, useState } from "react";
import { IoIosArrowForward } from 'react-icons/io'
import * as Yup from 'yup'
import { schema } from './schemaValidation'

import { Button } from "../../elements/Form/Button";
import { Input } from "../../elements/Form/Input";
import { Radio } from '../../elements/Form/RadioInput'
import { Form } from "../../elements/Form/styles";
import { TextArea } from "../../elements/Form/TextArea";
import { Header } from "../../elements/Header";
import { Profile } from "../../elements/Profile";
import { CheckboxInput } from '../../elements/Form/CheckBox'
import { Select } from '../../elements/Form/Select'
import { DetailsUser } from '../../elements/DetailsUser'

import { Container, Content, ContentOptions, ContainerOptions, TitleOptions } from "./styles";
import { checkboxOptions, selectOptions, radioOptions, text } from "./options";
import { FormHandles } from "@unform/core";
import getValidationErrors from "../../../utils/getValidationError";

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  const [detaislUser, setDetaislUser] = useState({})

  console.log(detaislUser);
  const formRef = useRef<FormHandles>(null);
  

  const removeDuplicated = (array) => {
    const newArray = array.filter((item, index) => array.indexOf(item) === index)

    return newArray
  } 

  const handleSubmit = async (data) => {
    try {
      formRef.current?.setErrors({});

      await schema.validate(data, {
        abortEarly: false,
      });

      const newData = {...data}

      newData.hobbys = removeDuplicated(newData.hobbys)

      setDetaislUser(newData)
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);

        formRef.current?.setErrors(errors);

        return;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Header title="Seja Bem vindo a Minha Página"/>
        <Profile text={text} />
        <Header 
          title="Entre em contato"
          height="30px"
          margin="30px 0 10px 0"
          size="16px"
        />
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <Input name="name" label="Nome" />
          <Input name="email" label="E-Mail" />
          <Input name="whatsapp" label="WhatsApp" />
          <TextArea name="subject" label="Assunto" />

          <ContainerOptions>
            <ContentOptions>
              <TitleOptions>Hobbys</TitleOptions>
              <CheckboxInput 
                name="hobbys"
                options={checkboxOptions}
              />
            </ContentOptions>

            <ContentOptions>
              <TitleOptions>Gosto mais de:</TitleOptions>
              <Radio name="preference" options={radioOptions} />
            </ContentOptions>
            <ContentOptions>
              <TitleOptions>Hobbys</TitleOptions>
              <Select 
                name="contact"
                placeholder="Escolha"
                options={selectOptions}
              />
            </ContentOptions>
          </ContainerOptions>
          <Button type="submit">
            Enviar
            <IoIosArrowForward />
          </Button>
        </Form>
        <DetailsUser data={detaislUser}/>
      </Content>
    </Container>
  )
}