import React, { useContext, useEffect, useState } from 'react'
import ProfileContext from '../../../context/ProfileContext'
import CircularProgress from '@mui/material/CircularProgress'
import { useLocation } from 'react-router-dom'
import { getProfileInfo } from '../../helpers'

const Profile = () => {
    const { profile, setProfile, userName, setUserName } = useContext(ProfileContext)
    const location = useLocation()

    useEffect(() => {
        if(location.pathname.split('/')[2] && setUserName) setUserName(location.pathname.split('/')[2])
    },[])

    useEffect(() => {
        if(userName) getProfileInfo(userName)
            .then(profile => {
                setProfile(profile)
            })
            .catch(err => console.log(err))
    }, [userName])

    if (profile) {
        return (<>
            <div className="profile">
                <img className="profile__avatar" src={profile.user.avatarMedium} alt=""/>
                <div className="profile-info">
                    <div className="profile-info__name">{profile.user.nickname} <strong>{ ' @'+profile.user.uniqueId}</strong></div>
                    <div className="profile-statistics">
                        <div className="stats-item stats-item__followings">
                            <h4>Following</h4>
                            <span>{profile.stats.followingCount}</span>
                        </div>
                        <span className="stats-item stats-item__followers">
                            <h4>Followers</h4>
                            <span>{profile.stats.followerCount}</span>
                        </span>
                        <span className="stats-item stats-item__likes">
                            <h4>Likes</h4>
                            <span>{profile.stats.heartCount}</span>
                        </span>
                    </div>
                </div>
            </div>
        </>)
    } else {
        return <CircularProgress/>
    }
}

export default Profile
