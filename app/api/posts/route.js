import { Post } from "@/app/_lib/models";
import { NextResponse } from "next/server";

export const GET = async (request) => {

  try {
 
    const posts = await Post.findAll();
     return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
 };
 