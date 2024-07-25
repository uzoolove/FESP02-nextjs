import { login } from "./userAction";

// email/password 로그인
export async function signInWithCredentials(formData: FormData){
  try{
    const result = await login(formData);
    console.log(result);
  }catch(err){
    console.error(err);
  }  
}

export async function signInWithGoogle(formData: FormData){

}

export async function signInWithGithub(formData: FormData){
  
}