import Submit from "@/components/Submit";
import { signup } from "@/data/actions/userAction";
import { UserForm } from "@/types";
import { Metadata } from "next";
import Link from "next/link";
import { useForm } from "react-hook-form";

export const metadata: Metadata = {
  title: '회원 가입 - 멋사컴',
  openGraph: {
    title: '회원 가입 - 멋사컴',
    description: '무료 회원 가입후 멋사컴의 모든 서비스를 이용하세요.',
    url: '/user/signup'
  }
}
  
export default function Page() {

  const { register, handleSubmit, formState: { errors }, setError } = useForm<UserForm>();

  const addUser = async (formData: UserForm) => {

    formData.type = 'user';
    const resData = await signup(formData);

    if(resData.ok){
      alert(`${resData.item.name}님 회원가입을 환영합니다.`);
    }else{ // API 서버의 에러 메시지 처리
      if('errors' in resData){
        resData.errors.forEach(error => setError(error.path, { message: error.msg }));
      }else if(resData.message){
        alert(resData.message);
      }
    }
  };

  return (
    <main className="min-w-80 flex-grow flex items-center justify-center">
      <div className="p-8 border border-gray-200 rounded-lg w-full max-w-md dark:bg-gray-600 dark:border-0">
        <div className="text-center py-4">
          <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-200">회원 가입</h2>
        </div>

        <form method="post" action="/">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              placeholder="이름을 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              name="name"
            />
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">이름은 필수입니다.</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              placeholder="이메일을 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              name="email"
            />
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">이메일은 필수입니다.</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
              name="password"
            />
            <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">비밀번호는 필수입니다.</p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="attach">프로필 이미지</label>
            <input
              type="file"
              id="attach"
              accept="image/*"
              placeholder="이미지를 선택하세요"
              className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
              name="attach"
            />
          </div>

          <div className="mt-10 flex justify-center items-center">
            <Submit>회원가입</Submit>
            <Link href="/" className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">취소</Link>
          </div>
        </form>
      </div>
    </main>
  );
}