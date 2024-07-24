import CommentNew from "./CommentNew";
import CommentItem from "./CommentItem";
import { fetchPost } from "@/data/fetch/postFetch";

export default async function CommentList({ id } : { id: string }) {
  const data = await fetchPost(id);
  if(data === null) return null;
  const list = data.replies?.map(item => <CommentItem key={item._id} item={item} />);
  // const list = [<CommentItem key={1} />, <CommentItem key={2} />];
  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 {data.replies?.length || 0}개</h4>

      { list }

      <CommentNew />

    </section>
  );
}