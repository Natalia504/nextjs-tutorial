import { fetchUsers, saveUser } from "@/utils/actions";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const users = await fetchUsers();
  // return NextResponse.redirect(new URL("/", req.url)); // redirects to the home page.
  return Response.json({ users }); // if you want to see all users at /api/users - uncomment this line
};

export const POST = async (req: Request) => {
  const user = await req.json();
  const newUser = { ...user, id: Date.now().toString() };
  console.log("🚀 ~ POST ~ user:", user);
  await saveUser(newUser);
  return Response.json({ msg: "User created" });
};
