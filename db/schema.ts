import { serial, text, pgTableCreator, pgSchema, integer, pgEnum, uniqueIndex } from 'drizzle-orm/pg-core';

export const mySchema = pgSchema('e-commerce');

export const productTypeEnum = pgEnum('product_type', ['sticker', 'tshirt', 'mug', 'keychain', 'canvas', 'decal'])

const pgTable = pgTableCreator((name) => `jdm-legends_${name}`);

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  price: integer('price').notNull(),
  type: productTypeEnum('type').notNull(),
  imageURL: text('image_url').notNull(),
  desc: text('desc').notNull(),
  quantity: integer('quantity').notNull(),
});

export type ProductType = typeof products.$inferSelect;
export type NewProductType = typeof products.$inferInsert;