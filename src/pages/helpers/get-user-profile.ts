import { OPTIONS, TIKTOK_URL } from '../../constants'

export function getProfileInfo(profileName: string) {
    return fetch(TIKTOK_URL + profileName , OPTIONS)
        .then(response => response.json())

}
