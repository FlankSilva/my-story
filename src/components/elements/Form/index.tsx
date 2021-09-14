import { FC, FormHTMLAttributes } from 'react'
import { Form as FormStyled } from './styles'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: JSX.Element[];
  onSubmit: any;
  formRef: any;
}

export const Form: FC<FormProps> = ({ 
  children,
  onSubmit,
  formRef,
  ...rest
}) => {
  return (
    <FormStyled
      onSubmit={onSubmit}
      {...rest}
    >
      {children}
    </FormStyled>
  ) 
}