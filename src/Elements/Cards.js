import styled from 'styled-components';
import { elevation, transition, purp } from 'Utilities';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 1rem;
  color: ${purp};
  ${elevation[4]};
  ${transition({})};
  &:hover {
    ${elevation[2]};
  }
`;