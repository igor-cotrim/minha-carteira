import styled, { css } from 'styled-components';

type ContainerProps = {
  color: string
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, color }) => css`
    position: relative;
    width: 32%;
    height: 150px;
    margin: 10px 0;
    color: ${theme.colors.white};
    background: ${color};
    border-radius: 7px;
    padding: 10px 20px;
    overflow: hidden;

    > svg{
      position: absolute;
      opacity: 30%;
      height: 110%;
      top: -10px;
      right: -30px;
    }

    > span {
      font-size: 18px;
      font-weight: 500;
    }

    > small {
      font-size: 12px;
      position: absolute;
      bottom: 10px;
    }
  `}
`;
