import React, { useEffect, useState } from 'react'
import { IPost, IStatistics } from '../../../models'
import likeIcon from '../../../assets/icons/like.svg'
import shareIcon from '../../../assets/icons/share.svg'

const Statistics = ({ diggCount, shareCount }: IStatistics) => {

    return (<>
        <div className="post_statistics">
            <div className="statistics-item">
                <img className="statistics-item__icon likes" src={likeIcon} alt="likes"/>
                <div className="statistics-item__number">{diggCount}</div>
            </div>
            <div className="statistics-item">
                <img src={shareIcon} className="statistics-item__icon shared" alt="shares"/>
                <div className="statistics-item__number">{shareCount}</div>
            </div>
        </div>
    </>)
}

export default Statistics
