import React from 'react'

import styles from './input.module.scss'


interface iInput {
    color?: "primary" | "secondary",
    variant?: "outlined" | "standard",
    fullWidth?: boolean,
    disabled? : boolean,
    type?: string,
    required?: boolean,
    readOnly?: boolean,
    sx?: object,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string,
    placeholder?: string,
    name?: string,
    className?: string,
    size?: "small" | "medium" | "large"
}

export function Input ({
    color = "primary", 
    variant = "standard", 
    fullWidth = false, 
    disabled = false, 
    required = false,
    readOnly = false,
    type = "text",
    onChange = () => {},
    value = null,
    placeholder = null,
    name = null,
    className,
    size = "medium",
    sx
}:iInput) {
    return (
    
        <input 
            type={type}
            disabled={disabled}
            required={required}
            readOnly={readOnly}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            name={name}
            className={`${styles[variant]} ${styles[color]} ${styles[size]} ${fullWidth ? styles.fullWidth : ""} ${className}`}
            style={{...sx}}
        />

    )
}