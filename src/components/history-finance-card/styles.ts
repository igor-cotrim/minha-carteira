import styled, { css, keyframes } from 'styled-components';

type TagProps = {
  color: string
}

const animate = keyframes`
  0%{
    transform: translateX(-100px);
    opacity: 0;
  }
  50%{     
    opacity: .3;
  }
  100%{
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const Container = styled.li`
  ${({ theme }) => css`
    background: ${theme.colors.tertiary};
    list-style: none;
    border-radius: 10px;
    margin: 10px 0;
    padding: 12px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
    animation: ${animate} 0.5s ease;

    &:hover{
      opacity: 0.7;
      transform: translateX(10px);
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-left: 10px;
    }

    > div span {
      font-weight: 500;
      font-size: 20px;
    }
  `}
`;

export const Tag = styled.div<TagProps>`
  ${({ color }) => css`
    position: absolute;
    width: 12px;
    height: 60%;
    left: 0;
    background: ${color};
  `}
`;
