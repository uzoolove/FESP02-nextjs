'use client';

import Link from "next/link";
import { useParams } from "next/navigation";

export default function Pagination() {
  const params = useParams();
  return (
    <div>
      <ul className="flex justify-center gap-3 m-4">
        <li className="font-bold text-blue-700">
          <Link href={`/${params.type}?page=1`}>1</Link>
        </li>
        <li>
          <Link href={`/${params.type}?page=2`}>2</Link>
        </li>
      </ul>
    </div>
  );
}