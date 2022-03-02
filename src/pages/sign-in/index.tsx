import LogoSvg from '../../assets/svg-components/logo'
import Button from '../../components/button'
import Input from '../../components/input'

import * as S from './styles'

const SignIn = () => {
  return (
    <S.Container>
      <S.Logo>
        <LogoSvg />
        <h2>Minha Carteira</h2>
      </S.Logo>

      <S.Form onSubmit={() => { }}>
        <S.FormTitle>Entrar</S.FormTitle>
        <Input
          type="email"
          placeholder='e-mail'
          required
        />
        <Input
          type="password"
          placeholder='senha'
          required
        />
        <Button type='submit'>Acessar</Button>
      </S.Form>
    </S.Container>
  )
}

export default SignIn 