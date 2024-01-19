import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
  const info = await request.json()
   return NextResponse.json({"message":`Info received for ${info.name} of ${info.age}`});
 }

