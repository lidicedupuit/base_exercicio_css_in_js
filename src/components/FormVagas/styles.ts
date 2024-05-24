import styled from 'styled-components'

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const Button = styled.button`
<<<<<<< HEAD
background-color: ${(props) => props.theme.corPrincipal};
border: 1px solid ${(props) => props.theme.corPrincipal};
=======
   background-color: ${(props) => props.theme.corPrincipal};
  border: 1px solid ${(props) => props.theme.corPrincipal};
>>>>>>> 3befbc66ded96e0255b6d8ae8e24ed75bfeee72b
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.corSecundaria};
  margin-left: 8px;
  cursor: pointer;
`
export const Input = styled.input`
  padding: 0 16px;
<<<<<<< HEAD
  outline-color: ${(props) => props.theme.corPrincipal};
=======
 outline-color: ${(props) => props.theme.corPrincipal};
>>>>>>> 3befbc66ded96e0255b6d8ae8e24ed75bfeee72b
`
