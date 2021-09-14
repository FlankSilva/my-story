import { FC, TextareaHTMLAttributes, useEffect, useRef } from "react"
import { useField } from "@unform/core";

import { Container, TextArea as TextAreaStyled, Label } from './styles'
import { FeedbackError } from "../../../../utils/feedbackError";

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: any;
}

export const TextArea: FC<InputProps> = ({ name, label, ...rest }) => {
  
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref) => {
        return ref.value;
      }
    });
  }, [fieldName, registerField]);

  const props = {
    ref: inputRef,
    ...rest,
  }

  return (
    <Container>
      <Label htmlFor="">{label}</Label>
      <TextAreaStyled
        {...props}
      />
      <FeedbackError>
        {error}
      </FeedbackError>
    </Container>
  )
}