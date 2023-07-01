import React, { type PropsWithChildren } from 'react';

interface Props {
  className?: string,
  style?: object
}

const PageHeader: React.FC<PropsWithChildren<Props>> = ({ children, className = '', style = {} }) => (
  <p className={`text-4xl md:text-6xl text-bold mb-8 tracking-tight ${className}}`} style={style}>{children}</p>
);

export default PageHeader;
