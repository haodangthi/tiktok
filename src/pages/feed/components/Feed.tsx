import React, { useEffect, useState } from 'react'
import Video from './Video'
import { IPost } from '../../../models'
import Pagination from '@mui/material/Pagination'
import CircularProgress from '@mui/material/CircularProgress'
import { getPosts, getVideos } from '../../helpers'

const Feed = () => {
    const [ loading, setLoading ] = useState<boolean>(false)
    const [ posts, setPosts ] = useState<IPost[]>([])
    const [ page, setPage ] = useState<number>(1)
    const [ currentPosts, setCurrentPosts ] = useState<IPost[]>([])

    const onPaginationClicked = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(prev => value)
        setCurrentPosts(prev => getPosts(posts, value))
    }

    useEffect(() => {
        setLoading(true)
        getVideos()
            .then((posts) => {
                setPosts(posts as any)
                setCurrentPosts((posts as any).slice(0,5))
                setLoading(false)
            })
            .catch(err => setLoading(false))
    },[])

    return (
        <div className="posts">
            { (loading)
                ? <CircularProgress/>
                :currentPosts?.map(post => <Video key={post.id} post={post}/>) }
            <Pagination count={posts?.length / 5} page={page} color="secondary" onChange={onPaginationClicked}/>
        </div>)
}

export default Feed
