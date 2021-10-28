import dynamic from 'next/dynamic';

const Micro2Index = dynamic(() => import('micro2/Micro2Index'), {
  ssr: false,
  loading({ error }) {
    if (error) {
      return <p>That failed.</p>;
    }
    return <p>Loading...</p>;
  },
});

export function Index() {
  return (
    <div className="flex flex-col pt-16">
      <div className="px-10 pb-10">
        <h1 className="text-4xl font-bold text-green-500">Micro1 Index Page</h1>
      </div>

      <Micro2Index />
    </div>
  );
}

export default Index;
