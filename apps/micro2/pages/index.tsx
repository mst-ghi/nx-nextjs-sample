import { useApp } from '@micro-test/utils';

export function Index() {
  const { state } = useApp();

  return (
    <div className="flex flex-col px-10 pb-10 pt-16">
      <h1 className="text-4xl font-bold">{state.message}</h1>
    </div>
  );
}

export default Index;
