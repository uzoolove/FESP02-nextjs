import Submit from "@/components/Submit";
import { Metadata } from "next";
import Link from "next/link";

export function generateMetadata({ params }: { params: { type: string, id: string } }): Metadata {
  const boardName = params.type;
  return {
    title: `${boardName} - 게시글 수정`,
    description: `${boardName} - 게시글을 수정하세요.`,
    openGraph: {
      title: `${boardName} - 게시글 수정`,
      description: `${boardName} - 게시글을 수정하세요.`,
      url: `/${params.type}/${params.id}/edit`
    }
  };
}

export default function Page({ params }: { params: { type: string, id: string } }) {
  return (
    <main className="min-w-[320px] p-4">
      <div className="text-center py-4">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">게시글 수정</h2>
      </div>
      <section className="mb-8 p-4">
        <form action={`/${params.type}/${params.id}`}>
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="title">제목</label>
            <input
              id="title"
              type="text"
              placeholder="제목을 입력하세요." 
              className="w-full py-2 px-4 border rounded-md dark:bg-gray-700 border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              name="title"
              defaultValue="좋은 소식이 있습니다."
            />

            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">제목은 필수 입니다.</p>
          </div>
          <div className="my-4">
            <label className="block text-lg content-center" htmlFor="content">내용</label>
            <textarea 
              id="content"
              rows={15} 
              placeholder="내용을 입력하세요."
              className="w-full p-4 text-sm border rounded-lg border-gray-300 bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              name="content"
              defaultValue={`좋은 소식을 가지고 왔습니다.
오늘 드디어 최종 면접을 합니다.
많이 응원해 주세요^^`}
            ></textarea>

            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">내용은 필수입니다.</p>
          </div>
          <hr />
          <div className="flex justify-end my-6">
            <Submit>수정</Submit>
            <Link href={`/${params.type}/${params.id}`} className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">취소</Link>
          </div>
        </form>
      </section>
    </main>
  );
}