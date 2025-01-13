import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    if (body.email == "dawood@gmail.com" && body.password == "123456") {
      return NextResponse.json({
        message: "Login Successful",
        redirectUrl: "/dashboard",
      });
    } else {
      return NextResponse.json({
        alert: "Invalid Credentials",
      });
    }
  } catch (err: any) {
    return NextResponse.json({
      alert: "Invalid Credentials",
    });
  }
}
