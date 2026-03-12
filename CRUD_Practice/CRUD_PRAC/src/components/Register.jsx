import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navi=useNavigate()
    const schema = yup
        .object()
        .shape({
            name: yup.string().required(),
            email: yup.string().required(),
            contact: yup.string().required(),
            password: yup.string().required(),
        })
    const { register, handleSubmit,reset,formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });
    const handleForm =async (formData) => {
        console.log(formData);
        const response=await axios.post(`http://localhost:3000/user`,formData)
        
        if(response.data){
            reset()
            navi('/')
                }
    }

    return (
        <>
            <div className="col-sm-5 mx-auto bg-light p-4 mt-4 rounded-3">
                <h2 className='text-center text-warning'>Register Form</h2>
                <form onSubmit={handleSubmit((d) => handleForm(d))}>
                    <input type="text"  {...register('name')} className='form-control my-2' placeholder='Enter Your Name' />
                      {errors.name?.message && <p className='text-danger'>{errors.name?.message}</p>}
                    <input type="email" {...register('email')} className='form-control my-2' placeholder='Enter Your Email' />
                      {errors.email?.message && <p className='text-danger'>{errors.email?.message}</p>}
                    <input type="number" {...register('contact')} className='form-control my-2' placeholder='Enter Your Number' />
                      {errors.contact?.message && <p className='text-danger'>{errors.contact?.message}</p>}
                    <input type="password" {...register('password')} className='form-control my-2' placeholder='Enter Your Password' />
                      {errors.password?.message && <p className='text-danger'>{errors.password?.message}</p>}
                    <button className='btn btn-danger w-100 my-2'>Register</button>
                </form>
            </div>
        </>
    )
}

export default Register
