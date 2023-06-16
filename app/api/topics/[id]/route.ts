import { NextResponse } from "next/server";
import { db } from "../db";

// @ts-ignore
export async function GET(request, { params }) {
  const topic = db.topics.find((topic) => topic.id === Number(params.id));
  return NextResponse.json(topic);
}

// @ts-ignore
export async function PATCH(request, { params }) {
  const res = await request.json();
  let responseTopic = null;
  for (let i = 0; i < db.topics.length; i++) {
    if (db.topics[i].id === Number(params.id)) {
      db.topics[i].title = res.title;
      db.topics[i].body = res.body;
      responseTopic = db.topics[i];
      break;
    }
  }
  return NextResponse.json(responseTopic);
}

//@ts-ignore
export async function DELETE(request, { params }) {
  const newTopics = [];
  for (let i = 0; i < db.topics.length; i++) {
    if (db.topics[i].id !== Number(params.id)) {
      newTopics.push(db.topics[i]);
    }
  }
  db.topics = newTopics;
  return NextResponse.json({});
}
