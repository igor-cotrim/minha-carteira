import { useState } from 'react'

import LogoSvg from '../../assets/svg-components/logo'
import Button from '../../components/button'
import Input from '../../components/input'
import { useAuth } from '../../hooks/useAuth'

import * as S from './styles'

const SignIn = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { signIn } = useAuth()

  return (
    <S.Container>
      <S.Logo>
        <LogoSvg />
        <h2>Minha Carteira</h2>
      </S.Logo>

      <S.Form onSubmit={() => signIn(email, password)}>
        <S.FormTitle>Entrar</S.FormTitle>
        <Input
          type="email"
          placeholder='e-mail'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder='senha'
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type='submit'>Acessar</Button>
      </S.Form>
    </S.Container>
  )
}

export default SignIn 