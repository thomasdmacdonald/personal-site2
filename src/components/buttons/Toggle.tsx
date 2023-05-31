import React from 'react'

interface Props {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Toggle: React.FC<Props> = ({active, setActive}) => {
  return (
    <div 
        onClick={() => setActive(!active)}
        className={`${active ? "bg-primary" : "bg-neu"} relative w-16 h-6 neuShadowOut rounded-full transitionSlow cursor-pointer`}
    >
        <div className={`${active ? "bg-neu left-10 neuShadowIn" : "bg-primary left-0"} absolute top-0 h-6 w-6 rounded-full transitionSlow`} />
    </div>
  )
}

export default Toggle
