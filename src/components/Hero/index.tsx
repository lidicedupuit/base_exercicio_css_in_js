import React from 'react'
import { DivContainer, Formulario, HeroTitle } from './styles'

type Props ={
  children: string
 }

const Hero = (props:Props) => (
  <Formulario>
    <DivContainer>
    <HeroTitle>{props.children}</HeroTitle>
    </DivContainer>
  </Formulario>
)

export default Hero
