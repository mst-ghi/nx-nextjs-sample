import { useApp } from '@micro-test/utils';
import { Micro2Index } from '@micro-test/dynamics';

const messages = ['message 1', 'message 2', 'message 3', 'message 4'];

export function Index() {
  const { state, setMessage } = useApp();

  return (
    <div className="flex flex-col pt-16 border-solid">
      <div className="px-10 pb-10">
        <h1 className="text-4xl font-bold text-green-500">Micro1 Index Page</h1>
        <br />
        <p>{state.message}</p>
        <br />
        <button
          className="bg-gray-500 w-36 h-10 text-white"
          onClick={() =>
            setMessage(messages[(Math.random() * messages.length) | 0])
          }
        >
          {' '}
          change message{' '}
        </button>
      </div>

      <Micro2Index rdx={state} />
    </div>
  );
}

export default Index;
