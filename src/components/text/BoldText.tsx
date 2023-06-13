import React, { type PropsWithChildren } from 'react';

const BoldText : React.FC<PropsWithChildren> = ({ children }) => (
  <span className="text-primary font-bold">{children}</span>
);

export default BoldText;
