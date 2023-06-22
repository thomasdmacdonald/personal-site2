// TODO: remove this
/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { useRouter } from 'next/router';

interface Props {
  Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
    title?: string | undefined;
    titleId?: string | undefined;
  } & React.RefAttributes<SVGSVGElement>>,
  route: string,
}

const DIV_STRING = 'cursor-pointer w-6 h-6 mx-3 rounded-xl p-6 flex items-center justify-center group';
const TRANSITION_STRING = 'transition-opacity duration-700 ease-out absolute';

const MenuButton: React.FC<Props> = ({ Icon, route }) => {
  const router = useRouter();
  const active = router.pathname === route;
  return (
    <div
      role="button"
      tabIndex={0}
      className={DIV_STRING}
      onClick={() => router.push(route)}
    >
      <div className={`${!active ? 'opacity-0' : 'opacity-100'}  neuShadowIn ${TRANSITION_STRING} ${DIV_STRING}`} />
      <div className={`${active ? 'opacity-0' : 'opacity-100'} neuShadowOut ${TRANSITION_STRING} ${DIV_STRING}`} />
      <div className="relative">
        <Icon className={`h-6 w-6 ${active ? 'text-primary' : 'text-stone-700'} group-hover:text-primary group-focus:text-primary`} />
        <Icon className={`absolute opacity-0 top-0 left-0 h-6 w-6 ${active ? 'text-primary' : 'text-stone-700'} group-hover:text-primary group-hover:textGlow group-focus:text-primary group-focus:textGlow`} />
      </div>
    </div>
  );
};

export default MenuButton;
