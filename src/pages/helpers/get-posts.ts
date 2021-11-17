import { OPTIONS, TIKTOK_FEED_URL } from '../../constants'
import { trends } from '../../data/data'

export function getVideos() {
    return fetch(TIKTOK_FEED_URL ,OPTIONS)
        .then(response => response.json())
    //return Promise.resolve(trends)
}
