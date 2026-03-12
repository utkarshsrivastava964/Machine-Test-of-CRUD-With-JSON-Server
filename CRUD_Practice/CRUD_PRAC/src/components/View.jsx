import React, { useEffect, useState } from 'react'
import axios from 'axios'

const View = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        const response=await axios.get(`http://localhost:3000/user`);
        setData(response.data);
    }
    
  return (
    <>
      <div className="col-sm-10 mx-auto mt-4">
        <h2>View Component</h2>
        <table className='table'>
       <thead className='table-dark'>
             <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>Password</th>
                <th>Action</th>
            </tr>
       </thead>
       <tbody>
        {
            data?.map((item)=>{
                console.log(item);
                
                return(<>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>{item.password}</td>
                    <td>
                      <button className='btn btn-danger p-2 m-1'>DEL</button>
                      <button className='btn btn-warning p-2 m-1'>EDIT</button>
                    </td>
                </tr>
                </>)
            })
        }
       </tbody>
        </table>
      </div>
    </>
  )
}

export default View
