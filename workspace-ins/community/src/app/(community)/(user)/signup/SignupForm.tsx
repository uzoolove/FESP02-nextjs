'use client';

import InputError from "@/components/InputError";
import Submit from "@/components/Submit";
import { signup } from "@/data/actions/userAction";
import { UserForm } from "@/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const router = useRouter();

  const { register, handleSubmit, formState: { errors }, setError } = useForm<UserForm>();

  const addUser = async (formData: UserForm) => {
    
    const userData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      console.log(key, value);
      if(key !== 'attach'){
        userData.append(key, value as string);
      }
    });
    if(formData.attach){
      userData.append('attach', formData.attach[0]);
    }

    const resData = await signup(userData);
    if(resData.ok){
      alert(`${resData.item.name}님 회원가입을 환영합니다.`);
      router.push('/');
    }else{ // API 서버의 에러 메시지 처리
      if('errors' in resData){
        resData.errors.forEach(error => setError(error.path, { message: error.msg }));
      }else if(resData.message){
        alert(resData.message);
      }
    }
  };

  return (
    <form onSubmit={ handleSubmit(addUser) }>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          placeholder="이름을 입력하세요"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
          { ...register('name', {
            required: '이름을 입력하세요.',
            minLength: {
              value: 2,
              message: '이름을 2글자 이상 입력하세요.'
            }
          }) }
        />
        <InputError target={ errors.name }/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          placeholder="이메일을 입력하세요"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
          { ...register('email', {
            required: '이메일을 입력하세요.',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: '이메일 형식이 아닙니다.'
            }
          }) }
        />
        <InputError target={ errors.email }/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          placeholder="비밀번호를 입력하세요"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-orange-400 dark:bg-gray-700"
          { ...register('password', {
            required: '비밀번호를 입력하세요.'
          }) }
        />
        <InputError target={ errors.password }/>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-200 mb-2" htmlFor="attach">프로필 이미지</label>
        <input
          type="file"
          id="attach"
          accept="image/*"
          placeholder="이미지를 선택하세요"
          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
          { ...register('attach') }
        />
      </div>

      <div className="mt-10 flex justify-center items-center">
        <Submit>회원가입</Submit>
        <Link href="/" className="bg-gray-900 py-1 px-4 text-base text-white font-semibold ml-2 hover:bg-amber-400 rounded">취소</Link>
      </div>
    </form>
  );
}