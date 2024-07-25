// 서버 액션 정의
'use server';

import { ApiResWithValidation, SingleItem, UserData, UserForm } from "@/types";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

type LoginForm = {
  email: string,
  password: string,
};

export async function signup(formData: UserForm){
  // 이미지 업로드
  if(formData.attach !== undefined && formData.attach.length > 0){
    const body = new FormData();
    body.append('attach', formData.attach[0]);
    const fileRes = await fetch(`${SERVER}/files`, {
      method: 'POST',
      body
    });

    const resJson = await fileRes.json();

    if(!resJson.ok){
      throw new Error('파일 업로드 실패.');
    }

    formData.profileImage = resJson.item[0].path;
  }

  // 회원 가입
  formData.type = 'user';
  delete formData.attach;

  const res = await fetch(`${SERVER}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  });

  const resData: ApiResWithValidation<SingleItem<UserData>, UserForm> = await res.json();

  return resData;
}
