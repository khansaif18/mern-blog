import { validateToken } from "../services/authentication.js"



export const checkForAuthenticationCookie = (cookieName) => {
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName]
        if (!tokenCookieValue) {
            return res.status(401).json({ error: 'Authentication token missing' });
        }
        try {
            const userPayload = validateToken(tokenCookieValue, secretKey)
            req.user = userPayload
            next()
        } catch (error) {
            return res.status(401).json({ error: 'Invalid token' });
        }
    }
}
