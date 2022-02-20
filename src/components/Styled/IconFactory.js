import React from 'react';
import { styled } from 'styled-components';
import * as GrommetIcons from 'react-icons/gr';
import * as FAIcons from 'react-icons/fa';
const iconFamilies = {
  Grommet: GrommetIcons,
  FontAwesome: FAIcons,
};

const StyledIcon = styled(({ family, name, ...rest }) =>
  React.createElement(iconFamilies[family][name], rest)
)`
  width: ${({ theme, size }) => theme.sizing[size]};
  height: ${({ theme, size }) => theme.sizing[size]};
  fill: ${({ theme, color }) => theme.colors[color]};
`;

const Icon = ({ family, name, size, color }) => (
  <StyledIcon {...{ family, name, size, color }} />
);

export default Icon;
