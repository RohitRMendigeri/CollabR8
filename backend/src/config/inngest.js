import { Inngest } from "inngest";
import { connectDB } from "./db.js";
import {User} from "../models/user.model.js";
import { upsertStreamUser, deleteStreamUser } from "./stream.js";
// Create a client to send and receive events
export const inngest = new Inngest({ id: "SLACK" });

const syncFunction = inngest.createFunction(
    {id:"sync-user"},
    {event:"clerk/user.created"},
    async ({event}) => {
            await connectDB();

            const { id, email_addresses, first_name, last_name, profile_image_url } = event.data;

            // Build a safe display name from available fields
            const name = [first_name, last_name].filter(Boolean).join(' ').trim();

            const newUser = {
                clerkID: id,
                email: email_addresses?.[0]?.email_address,
                name: name || undefined,
                image: profile_image_url
            };

            await User.create(newUser);
            
            await upsertStreamUser({
                id: newUser.clerkID.toString(),
                name: newUser.name,
                image: newUser.image
            });

        await addUserToPublicChannels(newUser.clerkID.toString());
    }
);

const deleteUserFunction = inngest.createFunction(
    {id:"delete-user-from-db"},
    {event:"clerk/user.deleted"},
    async ({event}) => {
        await connectDB();
        const {id} = event.data;
        await User.deleteOne({clerkID: id});
       // await deleteStreamUser(id.toString());

       await deleteStreamUser(id.toString());
    }
);



// Create an empty array where we'll export future Inngest functions
export const functions = [syncFunction, deleteUserFunction];