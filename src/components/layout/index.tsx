import Aside from "../aside"
import Content from "../content"
import MainHeader from "../main-header"

import * as S from "./styles"

const Layout = () => {
  return (
    <S.Grid>
      <MainHeader/>
      <Aside/>
      <Content/>
    </S.Grid>
  )
}

export default Layout