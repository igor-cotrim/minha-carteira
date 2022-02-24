import * as S from "./styles"

type ContentProps = {
  children: React.ReactElement
}

const Content = ({ children }: ContentProps) => (
  <S.Container>
    {children}
  </S.Container>
)

export default Content