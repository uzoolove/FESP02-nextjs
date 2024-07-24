import Submit from "@/components/Submit";
import { Metadata } from "next";
import Link from "next/link";

export function generateMetadata({ params }: { params: { type: string } }): Metadata {
  const boardName = params.type;
  return {
    title: `${boardName} - 게시글 등록`,
    description: `${boardName} - 게시글을 등록하세요.`,
    openGraph: {
      title: `${boardName} - 게시글 등록`,
      description: `${boardName} - 게시글을 등록하세요.`,
      url: `/${params.type}/new`
    }
  };
}

export default function Page({ params }: { params: { type: string } }) {
  return (
    <main className="min-w-[320px] p-4">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">게시글 등록</h2>
      </div>
      <section className="mb-8 p-4">
        <form action={`/${params.type}/1`}>
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="title">제목</label>
            <input
              id="title"
              type="text"
              placeholder="제목을 입력하세요." 
              className="w-full py-2 px-4 border rounded-md dark:bg-gray-700 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              name="title"
            />
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">제목은 필수입니다.</p>
          </div>
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="content">내용</label>
            <textarea 
              id="content"
              rows={15} 
              placeholder="내용을 입력하세요."
              className="w-full p-4 text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              name="content"
            ></textarea>
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">내용은 필수입니다.</p>
          </div>
          <hr />
          <div className="flex justify-end my-6">
            <Submit>등록</Submit>
            <Link href={`/${params.type}`} className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">취소</Link>
          </div>
        </form>
      </section>
    </main>
  );
}