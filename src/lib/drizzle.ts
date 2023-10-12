import { sql } from "@vercel/postgres";
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";


export const customer = pgTable("customers", {
    id: serial("order_id"),
    name: varchar("customer_name", {length: 100}),
    email: varchar("customer_email", {length: 120}),
    password: varchar("customer_password", {length: 100}),
});

export const orders = pgTable("orders", {
    id: serial("order_id"),
});

export const db = drizzle(sql);