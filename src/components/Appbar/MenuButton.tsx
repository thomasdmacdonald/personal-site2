//TODO: remove this
/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react'
import { useRouter } from 'next/router'
import * as styles from "./styles.module.css"

interface Props {
    Icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
        title?: string | undefined;
        titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>>,
    route: string,
}

const MenuButton: React.FC<Props> = ({ Icon, route }) => {
    const router = useRouter()
    const active = router.pathname === route
    return (
        <div 
            className={`${active ? "neuShadowIn" : "neuShadowOut" } cursor-pointer w-6 h-6 mx-3 rounded-xl p-6 flex items-center justify-center`}
            onClick={() => router.push(route)}
        >
            <div className="relative">
                <Icon className={`h-6 w-6 ${active ? "text-red-500" : "text-stone-900"} hover:text-red-500 focus:text-red-500`}/>
                <Icon className={`absolute opacity-0 top-0 left-0 h-6 w-6 ${active ? "text-red-500" : "text-stone-900"} hover:text-red-500 hover:textGlow focus:text-red-500 focus:textGlow`}/>
            </div>
        </div>
    )
}

export default MenuButton
