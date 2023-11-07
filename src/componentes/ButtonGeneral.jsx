import React from 'react'

export const ButtonGeneral = (props) => {

    const buttonStyle ={

        width: props.width || '0px',
        height: props.height || '0px',
        backgroundColor: 'rgba(37, 38, 39,0.5)',
        position: 'relative',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',

    }

  return (
    <div style={buttonStyle} onClick={props.onClick}>
        {props.children}
    </div>
  )
}
