import { NextRequest, NextResponse } from 'next/server';

// 모든 요청에 대해서 이 함수를 실행해줘라고 말함

export function middleware(request: NextRequest) {
  console.log('미들웨어가 실행되고 있음');
  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들웨어 - 경로를 리다이렉팅함!');
    return NextResponse.redirect(new URL('/products', request.url));
  }
}

// 특정한 경로에 대해서만 실행되게
export const config = {
  matcher: ['/products/:path*'] // products 다음에 오는 모든 경로에 대해 middleware를 실행
};
