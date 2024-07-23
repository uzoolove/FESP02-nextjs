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

export default function Page({ params }: { params: { id: string } }) {
  console.log(params.id);
  if(params.id === '3'){
    throw new Error('MongoDB에서 에러 발생함. mongo error code 1234');
  }
  return (
    <h1 className="text-xl font-bold mb-4">{ params.id } 상세 조회</h1>
  );
}