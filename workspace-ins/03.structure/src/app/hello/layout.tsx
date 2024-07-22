export default function Layout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <>
      <h1>Layout</h1>
      { children }
    </>
  );
}