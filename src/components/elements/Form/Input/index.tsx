import { FC, InputHTMLAttributes, useEffect, useRef } from "react"
import { useField } from "@unform/core";

import { Container, Input as InputStyled, Label } from './styles'
import { FeedbackError } from "../../../../utils/feedbackError";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export const Input: FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, error, registerField } = useField(name);
  

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);


  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <InputStyled
        id={name}
        ref={inputRef}
        {...rest}
      />
      <FeedbackError>{error}</FeedbackError>
    </Container>
  )
}