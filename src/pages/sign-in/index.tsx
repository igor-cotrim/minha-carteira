import LogoSvg from '../../assets/svg-components/logo'
import * as S from './styles'

const SignIn = () => {
  return (
    <S.Container>
      <S.Logo>
        <LogoSvg />
        <h2>Minha Carteira</h2>
      </S.Logo>

      <S.Form>
        <S.FormTitle>Entrar</S.FormTitle>
        <input type="text" />
        <input type="password" />
        <button type='submit'>Acessar</button>
      </S.Form>
    </S.Container>
  )
}

export default SignIn 