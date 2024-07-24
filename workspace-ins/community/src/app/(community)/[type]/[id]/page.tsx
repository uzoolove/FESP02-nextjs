import Submit from "@/components/Submit";
import { Metadata } from "next";
import Link from "next/link";
import CommentList from "./CommentList";

export function generateMetadata({ params }: { params: { type: string, id: string } }): Metadata {
  const boardName = params.type;
  return {
    title: `${boardName} - 좋은 소식이 있습니다.`,
    description: `${boardName} - 좋은 소식을 가지고 왔습니다. 오늘 드디어...`,
    openGraph: {
      title: `${boardName} - 좋은 소식이 있습니다.`,
      description: `${boardName} - 좋은 소식을 가지고 왔습니다. 오늘 드디어...`,
      url: `/${params.type}/${params.id}`
    }
  };
}

export async function generateStaticParams(){
  return [
    { type: 'notice', id: '4' },
    { type: 'notice', id: '5' },
  ];
}

export default function Page({ params }: { params: { type: string, id: string } }) {
  return (
    <main className="container mx-auto mt-4 px-4">

      <section className="mb-8 p-4">
        <form action={`/${params.type}`}>
        <div className="font-semibold text-xl">제목 : 좋은 소식이 있습니다.</div>
          <div className="text-right text-gray-400">작성자 : 제이지</div>
          <div className="mb-4">
            <div>
              <pre className="font-roboto w-full p-2 whitespace-pre-wrap">좋은 소식을 가지고 왔습니다.<br />오늘 드디어 최종 면접을 합니다.<br />많이 응원해 주세요^^</pre>
            </div>
            <hr/>
          </div>
          <div className="flex justify-end my-4">
            <Link href={`/${params.type}`} className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">목록</Link>
            <Link href={`/${params.type}/${params.id}/edit`} className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">수정</Link>
            <Submit bgColor="red">삭제</Submit>
          </div>
        </form>
      </section>

      <CommentList />

    </main>
  );
}