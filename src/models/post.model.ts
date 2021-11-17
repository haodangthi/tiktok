export interface IPost extends IStatistics {
    id: string;
    webVideoUrl: string;
    videoUrl:string;
    authorMeta: {
        avatar: string;
        nickName: string;
        name: string;
    }
    hashtags: IHashtag[];
    text: string;
}

export interface IStatistics {
    shareCount: number;
    diggCount: string;
}

interface IHashtag {
    id: string;
    name: string;
}
