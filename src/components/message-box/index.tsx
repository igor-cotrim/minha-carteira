import * as S from "./styles"

type MessageBoxProps = {
  title: string
  description: string
  footerText: string
  icon: React.ReactElement
}

const MessageBox = ({
  description,
  title,
  footerText,
  icon
}: MessageBoxProps) => (
  <S.Container>
    <header>
      <h1>
        {title}{icon}
      </h1>
      <p>{description}</p>
    </header>
    <footer>
      <span>{footerText}</span>
    </footer>
  </S.Container>
)

export default MessageBox