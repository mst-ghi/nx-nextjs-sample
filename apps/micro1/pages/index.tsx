import { useApp } from '@micro-test/utils';

export function Index() {
  const { state, setMessage } = useApp();

  const updateMessage = () => {
    setMessage('this message changed from micro 1');
  };

  return (
    <div className="flex flex-col pt-16">
      <div className="px-10 pb-10">
        <button className="h-10 w-44 bg-blue-400" onClick={updateMessage}>
          setMessage()
        </button>
      </div>
      <div className="px-10 pb-10">
        <h1 className="text-4xl font-bold">{state.message}</h1>
      </div>
    </div>
  );
}

export default Index;
