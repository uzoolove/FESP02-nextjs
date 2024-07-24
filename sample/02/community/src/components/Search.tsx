import Submit from './Submit';

export default function Search() {
  return (
    <form action="#">
      <input
        className="dark:bg-gray-600 bg-gray-100 p-1 rounded"
        type="text"
        name="keyword"
      />
      <Submit>검색</Submit>
    </form>
  );
};
