export default function Page({ params }: { params: { id: string } }) {
  console.log(params.id);
  return (
    <h1 className="text-xl font-bold mb-4">{ params.id } 상세 조회</h1>
  );
}