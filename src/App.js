import React, { useEffect, useState } from 'react'
import UserData from './Components/UserData';
const API="https://jsonplaceholder.typicode.com/users";

export default function App() {
   const [users, setUsers] = useState([])


    const fetchUser=async(url)=>{
        try {
          const res=await fetch(url);
          const data=await res.json();
          if(data.length>0){
            setUsers(data);
          }
          console.log(data);
        } catch (error) {
          console.error(error);
        }

       
    }


  useEffect(()=>{

    fetchUser(API);
  },[])
  return (
    <>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>UserName</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody><UserData users={users}/></tbody>
        </table>
    </>
  )
}
