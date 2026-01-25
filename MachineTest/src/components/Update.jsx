import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom'

const Update = () => {
    const hhhh = useNavigate()
    const location = useLocation()
    const { id, contact, name, email, password } = location.state
    useEffect(() => {
        setValue("name", name)
        setValue("email", email)
        setValue("contact", contact)
        setValue("password", password)
    }, [])
    const schema = yup
        .object()
        .shape({
            // name: yup.string().required()
            name: yup.string().required().matches(/^\S.*\S$/, 'Only spaces is not Allowed'),
            email: yup.string().required().email(),
            contact: yup.string().required(),
            password: yup.string().required(),
        })
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    })
    const handleUpdate = async (FormData) => {
        const res = await fetch(`http://localhost:3000/user/${id}`, {
            method: "PUT",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(FormData)
        })
        const result = await res.json()
        if (result) {
            hhhh("/")
        }
    }
    return (
        <>
            <div className="col-sm-5 mx-auto">
                <h1 className='text-center mb-3'>Register <span className='Text-danger'>#Form</span></h1>
                <form onSubmit={handleSubmit((data) => handleUpdate(data))} >
                    <input type="text" {...register('name')} className='form-control mb-3' placeholder='Enter your name' />
                    {errors.name?.message && <p className='text-danger'>{errors.name?.message}</p>}
                    <input type="email" {...register('email')} className='form-control mb-3' placeholder='Enter your email' />
                    {errors.email?.message && <p className='text-danger'>{errors.email?.message}</p>}
                    <input type="number" {...register('contact')} className='form-control mb-3' placeholder='Enter your mobile number' />
                    {errors.contact?.message && <p className='text-danger'>{errors.contact?.message}</p>}
                    <input type="password" {...register('password')} className='form-control mb-3' placeholder='Enter your password' />
                    {errors.password?.message && <p className='text-danger'>{errors.password?.message}</p>}
                    <input type="submit" className='form-control text-bg-warning mb-3' />
                </form>
            </div>
        </>
    )
}

export default Update
