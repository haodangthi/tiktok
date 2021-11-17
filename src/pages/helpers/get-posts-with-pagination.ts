import { IPost } from '../../models'

export function getPosts(posts: IPost[], value: number) {
    return posts.slice((value-1) * 5,(value-1) * 5 + 5)
}
