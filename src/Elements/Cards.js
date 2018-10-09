import styled from 'styled-components';
import { elevation, transition } from 'Utilities';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 1rem;
  color: #000;
  ${elevation[4]};
  ${transition({
    property: 'box-shadow'
  })};
  &:hover {
    ${elevation[2]};
  }
`;