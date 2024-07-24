import CommentNew from "./CommentNew";
import CommentItem from "./CommentItem";

export default function CommentList() {
  const list = [<CommentItem key={1} />, <CommentItem key={2} />];
  return (
    <section className="mb-8">
      <h4 className="mt-8 mb-4 ml-2">댓글 2개</h4>

      { list }

      <CommentNew />

    </section>
  );
}