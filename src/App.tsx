import React, { useState } from 'react'
import ProfileContext from './context/ProfileContext'
import PageRouter from './pages/feed/components/PageRouter'

const App = function () {
    const [ profile, setProfile ] = useState(null)
    const [ userName, setUserName ] = useState('')
    return (
        <ProfileContext.Provider value={{ setProfile, profile, userName, setUserName }}>
            <PageRouter></PageRouter>
        </ProfileContext.Provider>
    )
}

export default App
