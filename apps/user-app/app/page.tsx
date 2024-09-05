import { PrismaClient } from "@repo/db/client";
const client = new PrismaClient();

export default function Home() {
  return <div className="text-3xl">Hello</div>;
}
