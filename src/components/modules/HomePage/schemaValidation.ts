import * as Yup from 'yup'

export const schema = Yup.object().shape({
  name: Yup.string()
    .required('Nome obrigatório')
    .trim(),
  email: Yup.string()
    .required('Email obrigatŕio')
    .email('Digite um e-mail valido'),
  whatsapp: Yup.string()
    .required('WhtatApp obrigatório')
    .trim(),
  subject: Yup.string()
    .required('Assunto Obrigatório')
    .trim(),
  contact: Yup.string()
    .required('Selecione uma opção')
})