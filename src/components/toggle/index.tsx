// import Switch from "react-switch";

import * as S from "./styles"

const Toggle = () => (
  <S.Container>
    <S.ToggleLabel>Light</S.ToggleLabel>
    <S.ToggleSelector
      checked
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => { }}
    />
    <S.ToggleLabel>Dark</S.ToggleLabel>
  </S.Container>
)

export default Toggle