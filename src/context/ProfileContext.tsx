import { createContext } from 'react'
export interface IProfileContext {
    profile?: any;
    setProfile?: any;
    test?: number;
    userName?: string;
    setUserName?: any;
}

const ProfileContext=createContext<IProfileContext>({})

export default ProfileContext
