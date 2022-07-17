import React, { ChangeEventHandler, useEffect } from 'react'

interface InputProps {
    type: string
    name: string
    placeholder?: string
    value?: string
    mode: string | null
    onChange: ChangeEventHandler<HTMLInputElement>
}
function Input({ type, name, value, onChange, mode, placeholder }: InputProps) {
    return (
        <div className='flex py-2 w-full'>
            <input
                className={"border-[1px] border-[#BDBDBD] w-full rounded-[8px] py-2 focus:outline-none focus:border focus:border-primary my-2 placeholder:text-lg px-4 "}
                style={{ color: `${mode === 'dark' ? "white" : ''}`, backgroundColor: `${mode === 'dark' ? "inherit" : ''}` }}
                type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    )
}
// mode === "dark" ? "border-[1px] px-4 text-white border-[#BDBDBD] rounded-[8px] py-2 my-2 placeholder:text-lg  bg-inherit" :

export default Input