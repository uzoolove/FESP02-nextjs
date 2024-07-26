'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainMenu() {
  const pathname = usePathname(); // client component에서만 사용 가능
  const isActive = (path: string) => pathname === path ? 'cs-active' : '';
  return (
    <div className="w-auto order-2 text-base mt-4 md:mt-0">
        <ul className="flex items-center gap-6 uppercase">
          <li className={`hover:text-amber-500 hover:font-semibold ${isActive('/info')}`}><Link href="/info">정보공유</Link></li>
          <li className={`hover:text-amber-500 hover:font-semibold ${isActive('/free')}`}><Link href="/free">자유게시판</Link></li>
          <li className={`hover:text-amber-500 a:font-semibold ${isActive('/qna')}`}><Link href="/qna">질문게시판</Link></li>
          <li className={`hover:text-amber-500 a:font-semibold ${isActive('/notice')}`}><Link href="/notice">공지게시판</Link></li>
        </ul>
      </div>
  );
}