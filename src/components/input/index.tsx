import { InputHTMLAttributes } from "react"
import * as S from "./styles"

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input = ({ ...rest }: InputProps) => (
  <S.Container {...rest} />
)

export default Input