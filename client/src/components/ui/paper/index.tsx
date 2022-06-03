import React from 'react'

import styles from './paper.module.scss'

interface iPaper {
    sx?: object,
    children: React.ReactNode
    variant?: "standard" | "rounded",
    shadow?: "small" | "medium" | "large",
    className?: string,
    onClick?: (e:any) => void
}

export function Paper ({
    sx, 
    children,
    variant = "rounded",
    shadow = "small",
    className,
    onClick = () => {}
}:iPaper) {
    return (
    <div
        style={{...sx}}
        className={`${styles[variant]} ${styles[shadow]} ${className}`}
        onClick={onClick}
    >
        {children}
    </div>
    )
}