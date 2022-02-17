import Aside from "../aside"
import Content from "../content"
import MainHeader from "../main-header"

import * as S from "./styles"

type LeyoutProps = {
  children: React.ReactElement
}

const Layout = ({ children }: LeyoutProps) => {
  return (
    <S.Grid>
      <MainHeader />
      <Aside />
      <Content>
        {children}
      </Content>
    </S.Grid>
  )
}

export default Layout