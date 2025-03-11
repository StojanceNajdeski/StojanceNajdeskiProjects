import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { db } from "~/server/db";
import { users } from "~/server/db/schema";
import { eq } from "drizzle-orm";
import jwt  from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET!;

export const authRouter = createTRPCRouter({
    login: publicProcedure.input(z.object({
        email: z.string().email(),
        password: z.string().min(8)
    })
)
.mutation(async({input})=> {
    const {email, password} = input
    
    const user = await db.select().from(users).where(eq(users.email, email)).limit(1)
    console.log(user)

    if(!user || user.length === 0) {
        throw new Error("Invalid email or password")
    }


    const token = jwt.sign(
        {id: user[0]?.id, email: user[0]?.email},
        JWT_SECRET,
        {expiresIn: "1h" }
    );
    
    return {token, user:{ id: user[0]?.id, email: user[0]?.email, name: user[0]?.name}}
})

})