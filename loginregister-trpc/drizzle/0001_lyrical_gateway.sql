CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DROP TABLE "loginregister-trpc_user";--> statement-breakpoint
ALTER TABLE "loginregister-trpc_account" DROP CONSTRAINT "loginregister-trpc_account_user_id_loginregister-trpc_user_id_fk";
--> statement-breakpoint
ALTER TABLE "loginregister-trpc_post" DROP CONSTRAINT "loginregister-trpc_post_created_by_loginregister-trpc_user_id_fk";
--> statement-breakpoint
ALTER TABLE "loginregister-trpc_session" DROP CONSTRAINT "loginregister-trpc_session_user_id_loginregister-trpc_user_id_fk";
--> statement-breakpoint
ALTER TABLE "loginregister-trpc_account" ALTER COLUMN "user_id" SET DATA TYPE integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "loginregister-trpc_account" ADD CONSTRAINT "loginregister-trpc_account_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "loginregister-trpc_post" ADD CONSTRAINT "loginregister-trpc_post_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "loginregister-trpc_session" ADD CONSTRAINT "loginregister-trpc_session_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
