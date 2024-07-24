'use client';

import { HashLoader, ScaleLoader } from "react-spinners";

export function FullScreen(){
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-60">
      <div className="flex flex-col items-center">
        <h3 className="mb-4 text-lg font-semibold">잠시만 기다려주세요.</h3>
        <HashLoader
          color="#f58714"
          size={60}
        />
      </div>
    </div>
  );
}

export function TargetArea(){
  return (
    <div className="flex justify-center">
      <ScaleLoader color="#F97316"/>
    </div>
  );
}
