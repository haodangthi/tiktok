import { OPTIONS, TIKTOK_URL } from '../../constants'
import { profile } from '../../data/profile-data'

export function getProfileInfo(profileName: string) {
    return fetch(TIKTOK_URL + profileName , OPTIONS)
        .then(response => response.json())
    //return Promise.resolve(profile)
}
