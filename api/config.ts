import { Client } from "appwrite";

const URL = process.env.NEXT_PUBLIC_APPWRITE_API_URL as string;
const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID as string;

export const appwriteConfig = {
  url: URL,
  projectId: PROJECT_ID,
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);
