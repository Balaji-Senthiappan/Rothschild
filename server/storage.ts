import { type User, type InsertUser, type LoginRecord, type InsertLoginRecord, loginRecords } from "@shared/schema";
import { randomUUID } from "crypto";
import { db } from "./db";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createLoginRecord(record: InsertLoginRecord): Promise<LoginRecord>;
  getLoginRecords(): Promise<LoginRecord[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;

  constructor() {
    this.users = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createLoginRecord(record: InsertLoginRecord): Promise<LoginRecord> {
    const newRecord = await db.insert(loginRecords).values(record).returning();
    return newRecord[0];
  }

  async getLoginRecords(): Promise<LoginRecord[]> {
    return await db.select().from(loginRecords);
  }
}

export const storage = new MemStorage();
