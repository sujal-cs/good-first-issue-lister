import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  const { url } = await req.json();

  const match = url.match(/^https?:\/\/github\.com\/([^/]+)\/([^/]+)(\/|$)/);

  if (!match) {
    return NextResponse.json({ error: "Invalid GitHub URL" }, { status: 400 });
  }

  const [, owner, repo] = match;

  const res = await axios.get(
    `https://api.github.com/repos/${owner}/${repo}/issues`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
      params: {
        labels: "good first issue",
        state: "open",
        per_page: 100,
      },
    }
  );

  const issues = await res.data;
  if (issues.length === 0) {
    return NextResponse.json({ message: "No good first issue" });
  }
  return NextResponse.json({ issues });
}
