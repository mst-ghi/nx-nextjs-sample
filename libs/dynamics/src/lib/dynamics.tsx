import dynamic from 'next/dynamic';

export const Micro2Index: any = dynamic(() => import('micro2/Micro2Index'), {
  ssr: false,
  loading({ error }) {
    if (error) {
      return (
        <div className="px-10">
          <p className="text-red-500">Micro2Index failed.</p>
        </div>
      );
    }
    return (
      <div className="px-10">
        <p className="text-green-500">Loading...</p>
      </div>
    );
  },
});
