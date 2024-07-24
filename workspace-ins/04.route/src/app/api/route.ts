
// GET http://localhost:3000/api
// export async function GET(request: Request) {
//   return Response.json({ hello: 'world' });
// }

import { NextRequest, NextResponse } from "next/server";

// 외부 API 호출
// let count = 0;
// export async function GET(request: Request) {
//   console.log('날씨 api 호출', ++count, request.);
//   // console.log(request.headers.get('cookies'));
//   const res = await fetch(`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?ServiceKey=wuW9xR1SRT8ETx%2BJEfP%2BCBTSTJTuRG%2FDMDRoqgYVzVT%2FlxBMvOM4TcOqO%2FYbLKbZVl2ZLK34V8jY0D4RW7fuTw%3D%3D&pageNo=1&	numOfRows=10&	dataType=JSON&base_date=20240724&base_time=0600&nx=55&ny=127`, {
//     next: {
//       revalidate: 60
//     }
//   });
//   const data = await res.json();
//   return Response.json({ data });
// }


export const dynamic = 'force-dynamic';
export async function GET(request: NextRequest) {
  // console.log('get posts', request.url, request.nextUrl.searchParams);
  console.log(new Date()); // fetch 요청의 revalidata가 각각 다를 경우 짧은 시간 기준으로(7초)
  const res = await fetch(`http://172.31.98.210/posts?type=info`, {
    next: { revalidate: 7 }
  });
  await fetch(`http://172.31.98.210/posts?type=qna`, {
    next: { revalidate: 10 }
  });
  const data = await res.json();
  return NextResponse.json({ data });
}
