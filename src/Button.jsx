import React from 'react'
import './components/Button.css'

// type imr and press inter to get ("import React from 'react")

const STYLES=['btn--primary','btn-outline']

const SIZES=['btn--medium','btn--large','btn--mobile','btn--wide']

const COLOR=['primary','blue','red','green']

export const Button=({
    children,
    type,
    onClick,
    ButtonStyle,
    buttonSize,
    buttonColor
}) => {
   const cheackButtonStyle=STYLES.includes(ButtonStyle)? ButtonStyle:STYLES[0]
   const CheckButtonSize=SIZES.includes(buttonSize)? buttonSize:SIZES[0]
   const checkButtonColor=COLOR.includes(buttonColor)? buttonColor:COLOR[0]

   

    return (
        <button className={`btn ${cheackButtonStyle} ${CheckButtonSize} ${checkButtonColor}`}
        onClick={onClick} type={type}>{children}</button>
    )
}
