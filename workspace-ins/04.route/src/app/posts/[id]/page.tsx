import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: `3번 게시물`,
//   description: '3번 게시물 상세정보'
// };

export function generateMetadata({ params }: { params: { id: string } }){
  return {
    title: `${params.id}번 게시물`,
    description: `${params.id}번 게시물 상세정보`
  };
}

export default function Page({ params }: { params: { id: string } }) {
  console.log(params.id);
  return (
    <h1 className="text-xl font-bold mb-4">{ params.id } 상세 조회</h1>
  );
}