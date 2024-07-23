'use client';

import Link from 'next/link';
import './globals.css';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path ? 'cs-active' : '';
  return (
    <html lang="ko">
      <body className="flex flex-col h-screen">
        <header className="bg-blue-500 text-white p-4">
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className={`hover:underline ${ isActive('/') }`}>Home</Link></li>
              <li><Link href="/about" className={`hover:underline ${ isActive('/about') }`}>About</Link></li>
              <li><Link href="/posts" className={`hover:underline ${ isActive('/posts') }`}>게시판</Link></li>
              <li><Link href="/login" className={`hover:underline ${ isActive('/login') }`}>로그인</Link></li>
              <li><Link href="/signup" className={`hover:underline ${ isActive('/signup') }`}>회원가입</Link></li>
            </ul>
          </nav>
        </header>

        { children }
        
      </body>
    </html>
  );
}