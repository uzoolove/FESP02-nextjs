import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: `3번 게시물`,
//   description: '3번 게시물 상세정보'
// };

export function generateMetadata({ params }: { params: { id: string } }): Metadata{
  return {
    title: `${params.id}번 게시물`,
    description: `${params.id}번 게시물 상세정보`,
    openGraph: {
      title: `${params.id}번 게시물`,
      description: `${params.id}번 게시물 상세정보`,
      images: {
        url: '/images/fesp.webp'
      },
      url: `https://community.fesp.shop/info/${params.id}`
    }
  };
}

// 이 함수가 반환한 배열만큼 SSG 페이지를 미리 생성
// 빌드하면 .next/server/app/posts/1.html, 2.html, 4.html
export async function generateStaticParams(){
  // params 배열 반환
  return [
    { id: '1' },
    { id: '2' },
    { id: '4' },
  ];
}

export default function Page({ params }: { params: { id: string } }) {
  console.log(params.id);
  if(params.id === '3'){
    throw new Error('MongoDB에서 에러 발생함. mongo error code 1234');
  }
  return (
    <h1 className="text-xl font-bold mb-4">{ params.id } 상세 조회</h1>
  );
}