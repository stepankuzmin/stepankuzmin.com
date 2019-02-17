import styled from 'styled-components';
import { rhythm, scaleIntoCSS } from '../../utils/typography';

const Primary = styled.h1`
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;

  ${scaleIntoCSS(1.4)}
`;

export default Primary;
