import React, { useState } from 'react'
import { useBlogContext } from '../context/ContextProvider'
import axios from 'axios'

export default function Signup() {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    })

    const { user, setUser } = useBlogContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/v1/user/signup', { fullName: formData.fullName, email: formData.email, password: formData.password })
            .then(res => console.log(res.data))
    }

    return (
        <div>
            <h2>Create New Account</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Full Name'
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                />
                <input
                    type="email"
                    placeholder='Email Address'
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder='Password'
                    value={formData.password}
                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}
