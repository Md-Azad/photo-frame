import { getAllPhotosEntity } from "@/app/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(_request) {
  const data = await getAllPhotosEntity();
  return NextResponse.json(data);
}
