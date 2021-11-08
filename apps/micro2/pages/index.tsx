export function Index({ rdx = {} }: { rdx: any }) {
  return (
    <div className="flex flex-col pt-16 border-gray-300">
      <div className="px-10 pb-10">
        <h1 className="text-4xl font-bold text-blue-600">Micro2</h1>
        <br />
        <p>{rdx.message}</p>
      </div>
    </div>
  );
}

export default Index;
