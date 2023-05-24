import React from 'react'
import MenuButton from './MenuButton'
import { HeartIcon, HomeIcon, BriefcaseIcon, CommandLineIcon, UserIcon} from '@heroicons/react/24/solid'

const pages = [
    {
        icon: HomeIcon,
        route: '/'
    },
    {
        icon: HeartIcon,
        route: '/about'
    },
    {
        icon: BriefcaseIcon,
        route: '/work'
    },
    {
        icon: CommandLineIcon,
        route: '/projects'
    },
    {
        icon: UserIcon,
        route: '/contact',
    }
]

const Appbar: React.FC = () => {
    return (
        <div className="w-full flex justify-center absolute top-0 left-0">
            <div className="bg-slate-200 flex flex-row px-1 py-4 rounded-b-xl">
                {pages.map(({icon, route}) => (
                    <MenuButton key={route} Icon={icon} route={route}/>
                ))}
            </div>
        </div>
    )
}

export default Appbar