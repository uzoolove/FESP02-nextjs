import { Metadata } from "next";
import Link from "next/link";

export function generateMetadata({ params }: { params: { type: string } }): Metadata{
  const boardName = params.type;
  return {
    title: `${boardName} - 멋사컴`,
    description: `${boardName} 게시판입니다.`,
    openGraph: {
      title: `${boardName} - 멋사컴`,
      description: `${boardName} 게시판입니다.`,
      url: `/${params.type}`,
      images: {
        url: '/images/fesp.webp'
      }
    }
  };
}

export default function Page({ params }: { params: { type: string } }) {
  return (
    <main className="min-w-80 p-10">
      <div className="text-center py-4">
        <h2 className="pb-4 text-2xl font-bold text-gray-700 dark:text-gray-200">정보 공유</h2>
      </div>
      <div className="flex justify-end mr-4">
        
        <form action="#">
          <input
            className="dark:bg-gray-600 bg-gray-100 p-1 rounded"
            type="text"
            name="keyword"
          />
          <button type="submit" className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">검색</button>
        </form>

        <Link href={`/${params.type}/new`} className="bg-orange-500 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">글작성</Link>
      </div>
      <section className="pt-10">
        <table className="border-collapse w-full table-fixed">
          <colgroup>
            <col className="w-[10%] sm:w-[10%]" />
            <col className="w-[60%] sm:w-[30%]" />
            <col className="w-[30%] sm:w-[15%]" />
            <col className="w-0 sm:w-[10%]" />
            <col className="w-0 sm:w-[10%]" />
            <col className="w-0 sm:w-[25%]" />
          </colgroup>
          <thead>
            <tr className="border-b border-solid border-gray-600">
              <th className="p-2 whitespace-nowrap font-semibold">번호</th>
              <th className="p-2 whitespace-nowrap font-semibold">제목</th>
              <th className="p-2 whitespace-nowrap font-semibold">글쓴이</th>
              <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">조회수</th>
              <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">댓글수</th>
              <th className="p-2 whitespace-nowrap font-semibold hidden sm:table-cell">작성일</th>
            </tr>
          </thead>
          <tbody>

            <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
              <td className="p-2 text-center">2</td>
              <td className="p-2 truncate indent-4"><Link href={`/${params.type}/2`} className="cursor-pointer">안녕하세요.</Link></td>
              <td className="p-2 text-center truncate">용쌤</td>
              <td className="p-2 text-center hidden sm:table-cell">29</td>
              <td className="p-2 text-center hidden sm:table-cell">2</td>
              <td className="p-2 truncate text-center hidden sm:table-cell">2024.07.05 13:39:23</td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 ease-in-out">
              <td className="p-2 text-center">1</td>
              <td className="p-2 truncate indent-4"><Link href={`/${params.type}/1`} className="cursor-pointer">좋은 소식이 있습니다.</Link></td>
              <td className="p-2 text-center truncate">제이지</td>
              <td className="p-2 text-center hidden sm:table-cell">22</td>
              <td className="p-2 text-center hidden sm:table-cell">5</td>
              <td className="p-2 truncate text-center hidden sm:table-cell">2024.07.03 17:59:13</td>
            </tr>
          </tbody>
        </table>
        <hr />

        <div>
          <ul className="flex justify-center gap-3 m-4">
            <li className="font-bold text-blue-700">
              <Link href={`/${params.type}?page=1`}>1</Link>
            </li>
            <li>
              <Link href={`/${params.type}?page=2`}>2</Link>
            </li>
          </ul>
        </div>

      </section>
    </main>
  );
}