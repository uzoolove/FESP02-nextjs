import Link from "next/link";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1 overflow-hidden">
      <aside className="w-48 bg-gray-800 text-white p-4 lg:w-64">
        <ul className="space-y-2">
          <li><Link href="/posts" className="block hover:bg-gray-700 p-2 rounded">목록 조회</Link></li>
          <li><Link href="/posts/new" className="block hover:bg-gray-700 p-2 rounded">글쓰기</Link></li>
        </ul>
      </aside>
      <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        { children }
      </main>
    </div>
  );
}