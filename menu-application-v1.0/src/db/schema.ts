import { pgTable, serial, varchar, integer } from "drizzle-orm/pg-core";

export const prices = pgTable("prices", {
  id: serial("id").primaryKey(),
  slug: varchar("slug", { length: 50 }).notNull().unique(),
  denari: integer("denari").notNull(),
});
