import { Router } from 'express'
import { User } from '../models/user.js'

export const userRoute = Router()

userRoute.post('/signup', async (req, res) => {
    const { fullName, email, password } = req.body
    try {
        const newUser = await User.create({
            fullName,
            email,
            password
        })

        return res.json({ status: 'successful', user: newUser })
    } catch (error) {
        console.log('signup error', error);
        return res.json({ error: "some error occured" })
    }
})

userRoute.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await User.matchPasswordAndCreateToken(email, password);
        console.log('Generated Token:', token); // Debugging
        return res.cookie('token', token).status(200).json({ status: 'Signed In Successfully' });
    } catch (error) {
        console.error('Error in login:', error.message);
        return res.status(401).json({ error: error.message });
    }
});


userRoute.get('/logout', (req, res) => {
    try {
        res.clearCookie('token').json({ status: 'Logged Out Successfully' })
    } catch (error) {
        res.status(400).json({ error: 'Could not Log Out, Try Again' })
    }
})