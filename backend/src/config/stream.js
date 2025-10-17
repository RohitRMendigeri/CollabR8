import { StreamChat} from 'stream-chat';
import {ENV} from '../config/env.js';
// import { User } from '@clerk/express';

const StreamClient = StreamChat.getInstance(ENV.STREAM_API_KEY, ENV.STREAM_API_SECRET);

export const upsertStreamUser = async (userData) => {
    try {
        await StreamClient.upsertUser(userData);
        console.log("Stream user upserted:", userData.name);
        return userData;
    } catch (error) {
        console.log("Error upserting Stream user:", error);
    }
}

export const deleteStreamUser = async (userId) => {
    try {
        await StreamClient.deleteUser(userId);
    }
    catch (error) {
        console.log("Error deleting Stream user:", error);
    }
}


export const generateStreamToken = (userId) => {
    try {
        const userIdString = userId.toString();
        return StreamClient.createToken(userIdString);
    } catch (error) {
        console.log("Error generating Stream token:", error);
        return null;
    }
}