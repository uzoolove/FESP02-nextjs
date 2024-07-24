export default function Page({ params }: { params: { id: string, slug: string } }) {
  console.log(params);
  return (
    <>
      <h1>posts/[id]/replies/page.tsx</h1>
      <h2>{ params.id }번 게시물의 댓글 목록 조회</h2>
    </>
  );
}