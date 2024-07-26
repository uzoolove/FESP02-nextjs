// 서버 액션 정의
'use server';

import { signIn } from "@/auth";

// email/password 로그인
export async function signInWithCredentials(formData: FormData){
  try{
    const result = await signIn('credentials', {
      email: formData.get('email') || '',
      password: formData.get('password') || '',
    });
    console.log(result);
  }catch(err){
    console.error(err);
  }  
}

export async function signInWithGoogle(formData: FormData){

}

export async function signInWithGithub(formData: FormData){
  
}