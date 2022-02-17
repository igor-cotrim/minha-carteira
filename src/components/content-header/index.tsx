import * as S from "./styles"

const ContentHeader = () => {
  return (
    <S.Container>
      <S.TitleContainer>
        <h1>Titulo</h1>
      </S.TitleContainer>
      <S.Controllers>
        <button type="button">Botao a</button>
        <button type="button">Botao b</button>
      </S.Controllers>
    </S.Container>
  )
}

export default ContentHeader