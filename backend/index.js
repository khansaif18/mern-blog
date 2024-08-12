import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { userRoute } from './routes/user.js';
import cookieParser from 'cookie-parser';
import { checkForAuthenticationCookie } from './middlewares/authentication.js';

const app = express()
const PORT = 8000

mongoose.connect('mongodb://127.0.0.1:27017/mern-blog')
    .then(() => console.log('MongoDB Connected'))
    .catch(() => console.log('MongoDB Connection Error'));


// Middlewares
app.use(cors({
    origin: 'http://localhost:5173/',
    credentials: true
}));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())
app.use(checkForAuthenticationCookie('token'))


app.use('/api/v1/user', userRoute)

app.get('/api', (req, res) => {
    res.json({ status: 'done scene hai' })
})

app.listen(PORT, () => {
    console.log(`Server is Runnig at Port : http://localhost:${PORT}`);
})