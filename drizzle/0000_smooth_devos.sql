CREATE SCHEMA "e-commerce";
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "product_type" AS ENUM('sticker', 'shirt', 'mug');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "jdm-legends_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"price" integer NOT NULL,
	"type" "product_type" NOT NULL,
	"image_url" text NOT NULL,
	"desc" text NOT NULL,
	"quantity" integer NOT NULL
);
