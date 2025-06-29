import { ApiRes, MultiItem, Post, SingleItem } from "@/types";

const SERVER = process.env.NEXT_PUBLIC_API_SERVER;
const LIMIT = process.env.NEXT_PUBLIC_LIST_LIMIT;
const DELAY = process.env.NEXT_PUBLIC_DELAY_TIME;

export async function fetchPosts(
    type: string | undefined, 
    page?: string, 
    keyword?: string): Promise<Post[]>{
  const params = new URLSearchParams();
  type && params.set('type', type);
  page && params.set('page', page);
  keyword && params.set('keyword', keyword);
  LIMIT && params.set('limit', LIMIT!);
  DELAY && params.set('delay', DELAY!);
  const url = `${SERVER}/posts?${params.toString()}`;
  console.log(url);
  const res = await fetch(url, {
    headers: {
      'client-id': '00-sample'
    }
  });
  const resJson: ApiRes<MultiItem<Post>> = await res.json();
  if(!resJson.ok){
    console.error(resJson);
    throw new Error('게시물 목록 조회 실패');
  }
  return resJson.item;
}

export async function fetchPost(_id: string){
  const url = `${SERVER}/posts/${_id}`;
  const res = await fetch(url, {
    headers: {
      'client-id': '00-sample'
    }
  });
  const resJson: ApiRes<SingleItem<Post>> = await res.json();
  if(!resJson.ok){
    return null;
  }
  return resJson.item;
}
