'use client';

import Submit from "@/components/Submit";
import { signInWithCredentials, signInWithGithub, signInWithGoogle } from "@/data/actions/authAction";
import Link from "next/link";

export default function LoginForm() {
  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          placeholder="이메일을 입력하세요"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
          name="email"
        />
        <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">이메일은 필수입니다.</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="비밀번호를 입력하세요"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
          name="password"
        />
        <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">비밀번호는 필수입니다.</p>
        <Link href="#" className="block mt-6 ml-auto text-gray-500 text-sm dark:text-gray-300 hover:underline">비밀번호를 잊으셨나요?</Link>
      </div>
      <div className="mt-10 flex justify-center items-center">
        <Submit formAction={signInWithCredentials}>로그인</Submit>
        <Submit formAction={signInWithGithub}>깃허브</Submit>
        <Submit formAction={signInWithGoogle}>구글</Submit>
        <Link href="/signup" className="ml-8 text-gray-800 hover:underline">회원가입</Link>
      </div>
    </form>
  );
}