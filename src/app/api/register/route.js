import { User } from "../../models/User";
import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

export async function POST(req) {
    const body = await req.json();

    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hash_password = bcrypt.hashSync(body.password, salt);

    await mongoose.connect(process.env.MONGO_URL);

    const user = await User.create({
        email: body.email,
        password: hash_password,
    });
    await mongoose.connection.close();
    return Response.json(user);
}
