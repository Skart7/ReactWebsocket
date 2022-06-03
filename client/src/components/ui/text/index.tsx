import React from 'react'

import styles from './text.module.scss'

interface iText {
    component?: string,
    className?: string,
    sx?: object,
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body1" | "body2" | "caption" | "button",
    children?: React.ReactNode
}


export function Text ({
    component = "p",
    className,
    sx,
    variant = "body1",
    children
}:iText) {

    const [Comp] = React.useState<any>(component)

    return (
    <Comp 
        className={`${styles[variant]} ${className || ""}`}
        style={{...sx}}
    >
        {children}
    </Comp>
    )
    
}