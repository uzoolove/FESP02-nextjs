'use server';

import { ApiRes, CoreRes, SingleItem, Post, PostComment } from "@/types/index";
import { auth } from "@/auth";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;

export async function addPost(formData: FormData): Promise<ApiRes<SingleItem<Post>>> {
  const session = await auth();
  const postData = {
    type: formData.get('type') || 'info',
    title: formData.get('title'),
    content: formData.get('content'),
  }

  const res = await fetch(`${SERVER}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`
    },
    body: JSON.stringify(postData),
  });

  return res.json();
}

export async function updatePost(formData: FormData): Promise<ApiRes<SingleItem<Post>>> {
  const session = await auth();

  const postData = {
    type: formData.get('type') || 'info',
    title: formData.get('title') || '',
    content: formData.get('content') || '',
  }

  const res = await fetch(`${SERVER}/posts/${formData.get('_id')}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`
    },
    body: JSON.stringify(postData),
  });
  
  return res.json();
}

export async function deletePost(formData: FormData): Promise<CoreRes> {
  const session = await auth();

  const res = await fetch(`${SERVER}/posts/${formData.get('_id')}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`
    },
  });

  return res.json();
}

export async function addComment(postId: string, formData: FormData): Promise<SingleItem<PostComment>>{
  const session = await auth();

  const res = await fetch(`${SERVER}/posts/${postId}/replies`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`
    },
    body: JSON.stringify(formData),
  });

  return res.json();
}

export async function deleteComment(postId: string, formData: FormData){
  const session = await auth();

  const res = await fetch(`${SERVER}/posts/${postId}/replies/${formData.get('_id')}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session?.accessToken}`
    }
  });
  
  return res.json();
}