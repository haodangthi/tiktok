import { OPTIONS, TIKTOK_FEED_URL } from '../../constants'

export function getVideos() {
    return fetch(TIKTOK_FEED_URL ,OPTIONS)
        .then(response => response.json())
}
