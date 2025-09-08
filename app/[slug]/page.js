import clientPromise from "@/lib/mongodb";
import { redirect } from "next/navigation";

export default async function SlugPage({ params }) {
  const { slug } = params;

  const client = await clientPromise;
  const db = client.db("shorturl");
  const urlDoc = await db.collection("urls").findOne({ slug });

  if (urlDoc && urlDoc.longUrl) {
    // Optionally, increment click count here
    // await db.collection("urls").updateOne({ slug }, { $inc: { clicks: 1 } });
    redirect(urlDoc.longUrl);
  }

  // If not found, show a 404 message
  return (
    <main style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>404 - Link Not Found</h1>
      <p>This short URL does not exist.</p>
    </main>
  );
}
