import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path === "/redirect") {
    return NextResponse.redirect(
      "https://guides.apple.com/?ug=CglEVUIgR3VpZGUSDgjZMhDEo%2BGA%2BZKqpJUBEg4I2TIQw7y33%2B%2B6ifL%2BARIOCNkyEJC988jqgIrQjQESDgjZMhCB%2B7XSiPTwrfUBEg4I2TIQ5J25xZOynPDxARINCNkyENuVr4POz8aMcBIOCMI7EK36pfjQuerJ0gESDQjCOxDSuurnjM6T7mASDQjCOxD3vr%2F%2Fkq%2FLqUwSDQjCOxCg9cK%2BjeOhnS4%3D"
    );
  }
}
