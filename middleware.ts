import { NextResponse } from "next/server";

//this function is called before every request! MUST be created in the root directory!
// to test: change routes in the browser
export function middleware(request: Request) {
  // because of the config object below, the middleware will redirect to the home page.
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/about/:path*", "/tours/:path*"],
};
