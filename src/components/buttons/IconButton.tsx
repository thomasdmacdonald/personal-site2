// TODO: remove this
/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';

interface Props {
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>>,
  onClick: () => void
}

const IconButton: React.FC<Props> = ({ Icon, onClick }) => (
  <div
    role="button"
    tabIndex={0}
    className="neuShadowOut cursor-pointer w-16 h-16 mx-3 rounded-xl p-6 flex items-center justify-center group"
    onClick={onClick}
  >
    <div className="relative">
      <Icon className="h-10 w-10 text-stone-700 group-hover:text-primary group-focus:text-primary" />
      <Icon className="absolute opacity-0 top-0 left-0 h-10 w-10 text-stone-700 group-hover:text-primary group-hover:textGlow group-focus:text-primary group-focus:textGlow" />
    </div>
  </div>
);

export default IconButton;
