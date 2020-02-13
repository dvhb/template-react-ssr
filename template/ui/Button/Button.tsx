import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  variant?: 'unstyled' | 'asLink' | 'black' | 'borderedBlack' | 'whiteBorderedBlack';
  size?: 'lg';
  block?: boolean;
  disabled?: boolean;
  className?: string;
};

export function Button({ children }: Props) {
  return <button type="button">{children}</button>;
}
