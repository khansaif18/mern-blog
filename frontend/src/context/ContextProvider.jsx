import React, { createContext, useContext, useState } from 'react'

const BlogContext = createContext()

export const useBlogContext = () => {
    return useContext(BlogContext)
}

export default function ContextProvider({ children }) {
    const [user, setUser] = useState(null)

    const statesToPass = { user, setUser }
    return (
        <BlogContext.Provider value={statesToPass}>
            {children}
        </BlogContext.Provider>
    )
}
