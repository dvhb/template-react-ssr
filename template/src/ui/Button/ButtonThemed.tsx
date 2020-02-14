import { styled } from 'linaria/react';

import { Button as ButtonDefault } from './Button';
import { withTheme, Theme } from '../../theme';

type Props = { theme: Theme };

const ButtonStyled = styled(ButtonDefault)<Props>`
  background-color: ${p => p.theme.primaryColor};
`;

export const Button = withTheme(ButtonStyled);
