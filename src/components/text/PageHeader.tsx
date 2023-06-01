import React, { type PropsWithChildren } from 'react'

interface Props {
  className?: string,
  style?: object
}

const PageHeader: React.FC<PropsWithChildren<Props>> = ({ children,  className='', style={}}) => {
  return (
    <p className={`text-6xl text-bold ${className}}`} style={style}>{children}</p>
  )
}

export default PageHeader
