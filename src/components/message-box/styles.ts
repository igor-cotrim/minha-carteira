import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 48%;
    height: 260px;
    background: ${theme.colors.tertiary};
    color: ${theme.colors.white};
    border-radius: 7px;
    margin: 10px 0;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > header svg {
      width: 35px;
      height: 35px;
      margin-left: 7px;
    }

    > header p {
      font-size: 18px;
    }

    ${media.lessThan("medium")`
      width: 100%;

      > header h1 {
        font-size: 24px;

        svg {
          width: 20px;
          height: 20px;
        }
      }

      > header p,
      > footer span {
        font-size: 14px;
      }
    `}

    ${media.lessThan("small")`
      width: 100%;
      height: auto;

      > header p {
        margin-bottom: 15px
      }
    `}
  `}
`;
