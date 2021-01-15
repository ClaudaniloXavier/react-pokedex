import React from 'react';

import { Container } from './styles';

// interface PokeTypeProps {
//   type
// }

const PokeType: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default PokeType;
