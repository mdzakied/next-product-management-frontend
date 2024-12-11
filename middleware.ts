import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  const { pathname } = req.nextUrl;

  // Redirect to login page if user is not authenticated
  if (!token && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Izinkan akses ke halaman lainnya
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Protect all routes under /dashboard
};
