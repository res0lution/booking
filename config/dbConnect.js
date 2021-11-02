import { connections, connect } from "mongoose"

const dbConnect = async () => {
    try {
        const { readyState } = connections;

        if (readyState >= 1) {
            return;
        }

        await connect(process.env.DB_LOCAL_URI);
        console.log("Connected to local database");
    } catch (error) {
       console.error(error) 
    }
}

export default dbConnect