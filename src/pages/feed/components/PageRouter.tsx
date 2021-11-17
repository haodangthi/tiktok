import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Feed from './Feed'
import Profile from './Profile'
import React from 'react'
import ButtonAppBar from './NavBar'

const PageRouter = () => {
        return (<>
            <ButtonAppBar></ButtonAppBar>
            <Routes>
                <Route path="/" element={Feed()}/>
                <Route path="/user-profile/:id" element={Profile()}/>
            </Routes>
    </>)
}

export default PageRouter
