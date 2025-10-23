import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");

  if (!tag) {
    return NextResponse.json(
      { status: 400, message: "Missing tag params" },
      { status: 400 }
    );
  }

  if (secret !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json(
      { status: 401, message: "Invalid secret" },
      { status: 401 }
    );
  }

  revalidateTag(tag);

  return NextResponse.json({
    revalidate: true,
    status: 200,
    message: `Revalidated tag: ${tag}`,
    Date: Date.now(),
  });
}
