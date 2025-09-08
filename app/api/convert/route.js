// app/api/shortens/route.js
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { nanoid } from "nanoid";

export async function POST(req) {
  const { longUrl } = await req.json();
  if (!longUrl)
    return NextResponse.json({ error: "Missing URL" }, { status: 400 });

  const client = await clientPromise;
  const db = client.db("shorturl");
  const slug = nanoid(6);

  await db
    .collection("urls")
    .insertOne({ slug, longUrl, clicks: 0, createdAt: new Date() });

  return NextResponse.json(
    { shortUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/${slug}` },
    { status: 201 }
  );
}

export async function GET() {
  const client = await clientPromise;
  const db = client.db("shorturl");
  const urls = await db.collection("urls").find({}).toArray();
  return NextResponse.json(urls);
}
