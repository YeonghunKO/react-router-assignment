import { useContext } from 'react';
import PathContext from '../context/pathContext';
import useRoute from '../hooks/useRoute';

function Root() {
  const { push } = useRoute();

  const { setRenderPath } = useContext(PathContext);

  return (
    <>
      <div>this is root page</div>
      <button
        onClick={() => {
          push('/about');
          setRenderPath('/about');
        }}
      >
        go to about page
      </button>
    </>
  );
}

export default Root;
