import styled from 'styled-components';
import media from 'styled-media-query';

export const Grid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 70px auto;
  grid-template-areas: 
  'AS MH'
  'AS CT';

  ${media.lessThan("medium")`
    grid-template-columns: 100%;
    grid-template-rows: 70px auto;
    grid-template-areas: 
    'MH'
    'CT';
  `}
`;
