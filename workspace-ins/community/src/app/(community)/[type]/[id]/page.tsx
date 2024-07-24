import Submit from "@/components/Submit";
import { Metadata } from "next";
import Link from "next/link";
import CommentList from "./CommentList";
import { fetchPost } from "@/data/fetch/postFetch";
import model from "@/data/fetch/model";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { type: string, id: string } }): Promise<Metadata> {
  const boardName = params.type;
  const item = await fetchPost(params.id);
  if(item === null) notFound();
  return {
    title: `${boardName} - ${item.title}`,
    description: `${boardName} - ${item.content}`,
    openGraph: {
      title: `${boardName} - ${item.title}`,
      description: `${boardName} - ${item.content}`,
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

export default async function Page({ params }: { params: { type: string, id: string } }) {
  // const item = await model.post.detail(Number(params.id));
  const item = await fetchPost(params.id);
  if(item === null) notFound();

  return (
    <main className="container mx-auto mt-4 px-4">

      <section className="mb-8 p-4">
        <form action={`/${params.type}`}>
        <div className="font-semibold text-xl">제목 : {item.title}</div>
          <div className="text-right text-gray-400">작성자 : {item.user?.name}</div>
          <div className="mb-4">
            <div>
              <pre className="font-roboto w-full p-2 whitespace-pre-wrap">{item.content}</pre>
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

      <CommentList id={params.id} />

    </main>
  );
}