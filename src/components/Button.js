import React from 'react'

export const Button = (props) => {
    return (
        <button type='button' onClick={(event) => {props.handleClick(props.value)}}>
            {props.children}
        </button>
    )
}