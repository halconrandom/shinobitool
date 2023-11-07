import React from 'react'

export const MainContainer = (props) => {

  const customHeight = props.customHeight || "auto";

  return (
    <div className='MainContainer' 
    style={{

        padding: '10px',
        height: customHeight,
        maxHeight: '500px',
        width: '370px',
        borderRadius: '15px',
        transition: 'height 0.5s linear',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        left: props.customLeft || '0',
        gap: props.gap || '0px',
        backgroundColor: props.customBackgroundColor || 'rgba(211, 212, 217,0.7)',


    }}>
      {props.children}
    </div>
  )
}
