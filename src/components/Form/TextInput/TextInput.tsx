import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
    children: ReactNode
}

function TextInputRoot({children} : TextInputRootProps){
    return (
        <div className='flex items-center gap-3 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 h-12'>
            {children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'


export interface TextInputIconProps {
    children: ReactNode
}

function TextInputIcon({children} : TextInputIconProps){
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'




export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput({...rest} : TextInputInputProps){
    return (
        <input
            className="py-4 bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
            {...rest} 
        />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}