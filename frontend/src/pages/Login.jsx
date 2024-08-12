import React, { useState } from 'react'
import axios from 'axios'

export default function Login() {

    const [formData, setFormData] = useState({ email: '', password: '' })

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/v1/user/login', { email: formData.email, password: formData.password })
            .then(res => console.log(res.data))
            .catch(err => console.error(err.response.data));

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}
