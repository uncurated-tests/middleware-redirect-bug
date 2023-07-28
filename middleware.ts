import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path === "/redirect") {
    return NextResponse.redirect(
      "https://play.vuejs.org/#eNqNVE1v2zAM/SucLnUA5wMrdsmcAN3QQ3fYim63ugfDphO1siVIcprC8H8fJct2WrTZcrFEvkc+8SMtu1JqcWiQrVlics2VBYO2UdtUpzWvlNQWWtBYQgellhWkjNApc+4TyHdZqcG/WLqbCzrBclkbC5nWsHHBovuH2eASaKHgzpEy1Zh9yr4OLlJyU1vUh0xE0Qw2W2idGejHS4g8azPxZi7BgsANLpwlmq4C653d+5zvsKV6Q5YqGvUN+LfBYLuBL7NJugtyFu+SrU4IXnPP6OL++3m1WrmTT54s+4b4VniDxUqJzKK3ACS+6msjK7zSOnvZpIySpmyb+A54VLJ8RWIxs4aaUfLd4tHImtreulApy4nBBepfynJqVsrWVGz/GIoqhHz+4W1WNxgP9nyP+dM79kdzdLaU3Wo01D4ahNFnM71D27uvf//EI51HZyWLRhD6jPMOjRSN09jDvjV1QbJPcF7tjZ9LXu/+mOujxdoMj3JCQ8n9u2lMXbE+evok93Jx6Xlp3VEVhxE/vzdW3mEZw3Nm8/0HC9RvhtJSGRqLAkte4627RWHWx/Y6VWG+7IvCNXhrmBxw1KwRdg39ptw/hNFyn26c5j5diEkJvcLIp4/hYsx1MRK89rB9wf1qrOOQL2hz8aUgp9xFFz2ijzVJ6COGWOfoNMyDki4eEAWiCl0co/57Uwp+CEeAtp1qOuxm10HyaT4Hu+cGGlUQ1UBmAI8Kc4sFzOcjP2nEeKab4HCYl1LT9qHACmsLvJ4ypAzWT+h2M3hpPyc28f83rQe7d5D+IVHXJcvTpxFiKfikdDlKnXAn/wis+wv/Of6X"
    );
  }
}
