import React, { useContext, useRef } from 'react'
import { IPost } from '../../../models'
import { NavLink } from 'react-router-dom'
import Statistics from './Statistics'
import ProfileContext from '../../../context/ProfileContext'

export default function Video({ post }: { post: IPost }) {
    const { setProfile, setUserName } = useContext(ProfileContext)
    const videoRef = useRef(null)

    const handleCLick = () => {
        setUserName(post.authorMeta.name)
        setProfile((prev: any) => null)
    }

    return (<>
      <div className="post">
          <div>
              <NavLink to={`/user-profile/${post.authorMeta.name }`} className="post-header" onClick={handleCLick}>
                  <img src={post.authorMeta.avatar} alt="avatar" className="post-header__avatar"/>
                  <div className="post-header__info">
                      <strong className="post-header__name">{'@' + post.authorMeta.name}</strong>
                      <span className="post-header__nickname">{post.authorMeta.nickName}</span>
                      <div className="post__text">
                          {post.text}
                      </div>
                  </div>
              </NavLink>
              <div className="post__video">
                  <video src={post.videoUrl} controls ref={videoRef} autoPlay></video>
                  <Statistics shareCount={post.shareCount} diggCount={post.diggCount}/>
              </div>
          </div>
      </div>
  </>)
}

