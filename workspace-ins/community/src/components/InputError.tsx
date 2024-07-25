import { FieldError } from "react-hook-form";

export default function InputError({ target }: { target: FieldError | undefined}){
  if(!target) return null;
  return (
    <p className="ml-2 mt-1 text-sm text-red-500 dark:text-red-400">
      { target.message }
    </p>
  );
}