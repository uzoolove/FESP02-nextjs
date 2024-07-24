'use client';

import Link from "next/link";

export default function Error() {
  return (
    <div className="py-20 bg-red-100 border border-red-400 text-red-700 p-4 rounded-lg flex flex-col items-center space-y-2">
      <h2 className="text-xl font-semibold mb-2 text-center">🚧 앗, 무언가 잘못됐네요!</h2>
      <h3 className="text-md font-semibold mb-2 text-center">요청하신 페이지를 찾을 수 없습니다.</h3>
      <Link href="/" className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">
        ⚙️ 홈으로 돌아가기
      </Link>
    </div>
  );
}