import { NextResponse } from "next/server";
import { db } from "./db";
export async function GET() {
  return NextResponse.json(db.topics);
}

let nextId = 3;
export async function POST(request: Request) {
  const res = await request.json();
  const newTopic = { id: nextId++, title: res.title, body: res.body };
  db.topics.push(newTopic);
  return NextResponse.json(newTopic);
}
