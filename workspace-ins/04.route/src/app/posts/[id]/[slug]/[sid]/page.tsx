export default function Page({ params }: { params: { id: string, slug: string, sid: string } }) {
  console.log(params);
  return (
    <>
      <h1>posts/[id]/[slug]/[sid]/page.tsx</h1>
      <h2>{ params.id }번 게시물의 { params.slug } { params.sid }번 조회</h2>
    </>
  );
}