import React from 'react'

import styles from './avatar.module.scss'

interface iAvatar {
    color?: "primary" | "secondary",
    variant?: "outlined" | "standard" | "rounded",
    sx?: object,
    children?: React.ReactNode,
    size?: "medium" | "large"
}

export function Avatar ({
    color = "primary",
    variant = "standard",
    children,
    size = "medium",
    sx
}:iAvatar) {
    return (
        <div
            className={`${styles[variant]} ${styles[color]} ${styles[size]}`}
            style={{...sx}}
        >
            {children}
        </div>
    )
}