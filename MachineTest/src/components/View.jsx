import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const View = () => {
    const navi = useNavigate()
    const [data, setData] = useState([])
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const res = await fetch(`http://localhost:3000/user`)
        const result = await res.json()
        // console.log(result)
        setData(result)
    }
    const handDel = async (id) => {
        const res = await fetch(`http://localhost:3000/user/${id}`, {
            method: "DELETE",
            headers: {
                "content-Type": "application/json",
            },
        });
        const result = await res.json();
        if (result) {
            fetchData()
        }
    }
    const handEdit = (item) => {
        navi("/edit", { state: item })
    }
    return (
        <>
            <div className="row">
                <div className="col-sm-12">
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
                                data.map((item) => {
                                    return (<>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.contact}</td>
                                            <td>{item.password}</td>
                                            <td>
                                                <button onClick={() => handDel(item.id)} className='mx-1 my-1 text-bg-danger border-0 rounded-2 py-2 px-3 '>Delete</button>
                                                <button onClick={() => handEdit(item)} className='mx-1 my-1 text-bg-warning border-0 rounded-2 py-2 px-3 '>Update</button>
                                            </td>
                                        </tr>
                                    </>)
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

     
        </>
    )
}

export default View
