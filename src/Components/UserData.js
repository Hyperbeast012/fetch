import React from 'react'

export default function UserData({users}) {
  return (
    <>  
        {
            users.map((curUser)=>{

                const{id,name,username}=curUser;

                return(
                    <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{username}</td>
                    </tr>
                )
            })
        }
    </>
  )
}
