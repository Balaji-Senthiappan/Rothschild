import type { Express } from "express";
import { createServer, type Server } from "http";
import * as fs from "fs";
import * as path from "path";

const ADMIN_USERNAME = "Admin@R&Co";
const ADMIN_PASSWORD = "Hexaware4R&Co";
const LOGIN_CSV_PATH = path.join(process.cwd(), "data", "logins.csv");

function ensureDataDirectory() {
  const dataDir = path.dirname(LOGIN_CSV_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(LOGIN_CSV_PATH)) {
    fs.writeFileSync(LOGIN_CSV_PATH, "name,timestamp\n");
  }
}

function appendLoginToCSV(name: string) {
  ensureDataDirectory();
  const timestamp = new Date().toISOString();
  const escapedName = name.includes(",") ? `"${name}"` : name;
  fs.appendFileSync(LOGIN_CSV_PATH, `${escapedName},${timestamp}\n`);
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/login", async (req, res) => {
    try {
      const { username, password, name } = req.body;

      if (!username || !password || !name) {
        return res.status(400).json({ message: "Username, password, and name are required" });
      }

      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        try {
          appendLoginToCSV(name);
        } catch (fileError) {
          console.error("CSV write error (non-blocking):", fileError);
        }
        return res.json({ success: true, message: "Login successful" });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/login-records", async (req, res) => {
    try {
      ensureDataDirectory();
      const csvContent = fs.readFileSync(LOGIN_CSV_PATH, "utf-8");
      const lines = csvContent.trim().split("\n").slice(1);
      const records = lines.map(line => {
        const [name, timestamp] = line.split(",");
        return { name: name.replace(/^"|"$/g, ""), timestamp };
      });
      return res.json(records);
    } catch (error) {
      console.error("Error fetching login records:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
