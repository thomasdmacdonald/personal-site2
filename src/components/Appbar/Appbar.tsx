import React from 'react';
import {
  HeartIcon, HomeIcon, BriefcaseIcon, CommandLineIcon, UserIcon,
} from '@heroicons/react/24/solid';
import MenuButton from './MenuButton';

const pages = [
  {
    icon: HomeIcon,
    route: '/',
  },
  {
    icon: HeartIcon,
    route: '/about',
  },
  {
    icon: BriefcaseIcon,
    route: '/work',
  },
  {
    icon: CommandLineIcon,
    route: '/projects',
  },
  {
    icon: UserIcon,
    route: '/contact',
  },
];

const Appbar: React.FC = () => (
  <div className="w-full flex justify-center absolute top-0 left-0 z-40">
    <div className="bg-neu flex flex-row px-1 py-4 rounded-b-xl">
      {pages.map(({ icon, route }) => (
        <MenuButton key={route} Icon={icon} route={route} />
      ))}
    </div>
  </div>
);

export default Appbar;
