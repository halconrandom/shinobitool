import React from 'react'

export const LogoImage = () => {
    const logoimagenstyles = {

        backgroundImage: `url(https://i.imgur.com/YNg4UKK.png)`,
        backgroundSize: 'cover',
        height: '206px',
        width: '206px',
        position: 'relative',
        top: '-20px',

    };
  return (
    <div className='LogoImagen' style={logoimagenstyles}></div>
  )
}
