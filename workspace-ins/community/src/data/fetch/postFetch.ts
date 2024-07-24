import { ApiRes, MultiItem, Post } from "@/types";

const SERVER = process.env.API_SERVER;
const LIMIT = process.env.LIMIT;
const DELAY = process.env.DELAY;

export async function fetchPosts(
    type: string | undefined, 
    page?: string, 
    keyword?: string): Promise<Post[]>{
  const params = new URLSearchParams();
  type && params.set('type', type);
  page && params.set('page', page);
  keyword && params.set('keyword', keyword);
  params.set('limit', LIMIT!);
  params.set('delay', DELAY!);
  const url = `${SERVER}/posts?${params.toString()}`;
  const res = await fetch(url);
  const resJson: ApiRes<MultiItem<Post>> = await res.json();
  if(!resJson.ok){
    throw new Error('게시물 목록 조회 실패');
  }
  return resJson.item;
}

async function fetchPost(_id: string){
  const url = `${SERVER}/posts/${_id}`;
  const res = await fetch(url);
  return res.json();
}
