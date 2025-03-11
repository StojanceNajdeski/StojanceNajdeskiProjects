import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { db } from "../../../server/db";
import { users } from "../../../server/db/schema";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, password } = body;

        if (!firstName || !lastName || !email || !password) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.insert(users).values({
            id: crypto.randomUUID(),
            name: `${firstName} ${lastName}`,
            email,
            password: hashedPassword,
            image: null
        });

        return NextResponse.json({ message: "User registered successfully!" }, { status: 201 });
    } catch (error) {
        console.error("Error inserting user:", error);
        return NextResponse.json({ message: "we fucked up", error: (error as Error).message }, { status: 500 });
    }
}