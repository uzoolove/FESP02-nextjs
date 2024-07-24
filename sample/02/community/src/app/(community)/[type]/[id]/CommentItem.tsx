import Submit from "@/components/Submit";
import Link from "next/link";

export default function CommentItem() {
  return (
    <div className="shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <img
          className="w-8 mr-2 rounded-full"
          src="https://api.fesp.shop/files/00-sample/user-apeach.webp"
          alt="어피치 프로필 이미지"
        />
        <Link href="" className="text-orange-400">어피치</Link>
        <time className="ml-auto text-gray-500" dateTime="2024.07.02 14:11:22">2024.07.02 14:11:22</time>
      </div>
      <div className="flex justify-between items-center mb-2">
        <form action="#">
          <pre className="whitespace-pre-wrap text-sm">화이팅!</pre>
          <Submit bgColor="red" size="sm">삭제</Submit>
        </form>
      </div>
    </div>
  );
}