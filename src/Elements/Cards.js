import styled from 'styled-components';
import { elevation, transition } from 'Utilities';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 1rem;
  max-width: 320px;
  margin: 0 auto;
  color: #000;
  ${elevation[2]};
  ${transition({
    property: 'box-shadow'
  })};
  &:hover {
    ${elevation[4]};
  }
`;