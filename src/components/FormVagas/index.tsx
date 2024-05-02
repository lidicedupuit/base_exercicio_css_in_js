import React from 'react'
import { FormEvent, useState } from 'react'
import { Formulario, Input, Button } from './styles'


export type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }
   return (
      <Formulario as="form"
      onSubmit={aoEnviarForm}>
      <Input
        as="input"
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
     <Button as="button" type="submit">Pesquisar</Button>
    </Formulario>
  )
}
export default FormVagas
