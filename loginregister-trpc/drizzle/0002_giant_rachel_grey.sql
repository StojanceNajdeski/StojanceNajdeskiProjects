ALTER TABLE "users" RENAME TO "loginregister-trpc_user";--> statement-breakpoint
ALTER TABLE "loginregister-trpc_user" DROP CONSTRAINT "users_email_unique";--> statement-breakpoint
ALTER TABLE "loginregister-trpc_account" DROP CONSTRAINT "loginregister-trpc_account_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "loginregister-trpc_post" DROP CONSTRAINT "loginregister-trpc_post_created_by_users_id_fk";
--> statement-breakpoint
ALTER TABLE "loginregister-trpc_session" DROP CONSTRAINT "loginregister-trpc_session_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "loginregister-trpc_account" ALTER COLUMN "user_id" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "loginregister-trpc_user" ALTER COLUMN "id" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "loginregister-trpc_user" ALTER COLUMN "email" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "loginregister-trpc_user" ALTER COLUMN "password" SET DATA TYPE varchar(255);--> statement-breakpoint
ALTER TABLE "loginregister-trpc_user" ADD COLUMN "name" varchar(255);--> statement-breakpoint
ALTER TABLE "loginregister-trpc_user" ADD COLUMN "email_verified" timestamp with time zone DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE "loginregister-trpc_user" ADD COLUMN "image" varchar(255);--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "loginregister-trpc_account" ADD CONSTRAINT "loginregister-trpc_account_user_id_loginregister-trpc_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."loginregister-trpc_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "loginregister-trpc_post" ADD CONSTRAINT "loginregister-trpc_post_created_by_loginregister-trpc_user_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."loginregister-trpc_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "loginregister-trpc_session" ADD CONSTRAINT "loginregister-trpc_session_user_id_loginregister-trpc_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."loginregister-trpc_user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "loginregister-trpc_user" DROP COLUMN IF EXISTS "first_name";--> statement-breakpoint
ALTER TABLE "loginregister-trpc_user" DROP COLUMN IF EXISTS "last_name";--> statement-breakpoint
ALTER TABLE "loginregister-trpc_user" DROP COLUMN IF EXISTS "created_at";