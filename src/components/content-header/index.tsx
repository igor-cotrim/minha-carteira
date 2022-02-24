import * as S from "./styles"

type ContentHeaderProps = {
  title: string
  lineColor: string
  children: React.ReactNode
}

const ContentHeader = ({ title, lineColor, children }: ContentHeaderProps) => (
  <S.Container>
    <S.TitleContainer lineColor={lineColor}>
      <h1>{title}</h1>
    </S.TitleContainer>
    <S.Controllers>
      {children}
    </S.Controllers>
  </S.Container>
)

export default ContentHeader