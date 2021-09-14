interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

interface RadioOption {
  id: string;
  value: string;
  label: string;
}

export const checkboxOptions: CheckboxOption[] = [
  { id: "netflix", value: "netflix", label: "Netflix" },
  { id: "barbecue", value: "barbecue", label: "Churrasco" },
  { id: "walk", value: "walk", label: "Sair com amigos" }
];

export const selectOptions = [
  { value: 'email', label: 'E-Mail' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'phone', label: 'Telefone' }
]

export const radioOptions: RadioOption[] = [
  { id: "front", value: "front", label: "Front-end" },
  { id: "back", value: "back", label: "Back-end" },
  { id: "design", value: "design", label: "Design" }
];

export const text = `
<p>Iniciei minha carreira de desenvolvedor entre o ano de 2015 e 2016, quando me deparei em um desafio de encontrar uma determinada ocorrência registrada em cadernos, na empresa que trabalhava, como operador de CFTV.</p></br>

<p>Como sempre fui curioso, comecei a procurar no YouTube, alguma forma de facilitar o cadastro e pesquisa dos dados. Foi ai que me deparei com o VBA, que me possibilitou criar formulários, onde podíamos cadastrar e pesquisar as informações.</p></br>

<p>Em 2018, entrei na empresa Cogna, que na época era conhecida como Kroton. Nela, pude dar um salto ainda maior na area de desenvolvimento, onde me propus a elaborar uma aplicação multi usuários.</p></br>

<p>Aplicação consistia em varias ferramentas em um só local. O que antigamente, trabalhávamos com varias planilhas excel. Foi ai então que comecei a estudar banco de dados.</p></br>

<p>Seis meses depois, fiz uma aplicação que contia varias funcionalidades. Entre elas um robo que fazia a leitura de ips e retornava uma listagem de equipamentos online e offiline, cadastro de ocorrências, controle de estacionamento, gerenciamento de projetos, entre outros.</p></br>

<p>A partir de então encolhi o mundo web, como foco e em 2020, tive o prazer de entrar para uma empresa de desenvolvimento, que me proporcionou me tornar um profissional na areá.</p></br>
`

