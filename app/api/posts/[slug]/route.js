import { Post } from "@/app/_lib/models";
import { NextResponse } from "next/server";


export const GET = async (request, { params }) => {
    const { slug } = params;
  
    try {
    
      const post = await Post.findOne({ slug });
      return NextResponse.json(post);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch post!");
    }
  };