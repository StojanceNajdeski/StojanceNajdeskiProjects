import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt"
import { db } from "../db";
import { users } from "../db/schema";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }
    try {
        const { firstName, lastName, email, password } = req.body

        if (!firstName || !lastName || !email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        await db.insert(users).values({
            id: crypto.randomUUID(),
            name: `${firstName} ${lastName}`,
            email,
            image: null
        })

        return res.status(201).json({message: "User registered successfully!"})
    } catch (error) {
        console.error("Error inserting user:", error)
        return res.status(500).json({message: "Something went wrong"})
    }
}