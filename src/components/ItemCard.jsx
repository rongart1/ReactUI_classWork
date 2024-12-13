import React from 'react'

export default function ItemCard({name,price,avatar}) {

    if(!name && !price && !avatar) return;


  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:10,border:'2px black solid',width:300,borderRadius:20}}>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <h1>Name :{name ? name : '#product'}</h1>
            <h2 >Price: {price ? price : 'N/A'}</h2>
        </div>
        <img style={{width:100,height:100,border:'1px black solid',borderRadius:50}} src={avatar ? avatar : 'user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.webp'}/>
    </div>
  )
}
