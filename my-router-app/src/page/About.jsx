import useRoute from '../hooks/useRoute';
import { useContext } from 'react';
import PathContext from '../context/pathContext';
function About() {
  const { push } = useRoute();

  const { setRenderPath } = useContext(PathContext);

  return (
    <>
      <div>this is about page</div>
      <button
        onClick={() => {
          push('/');
          setRenderPath('/');
        }}
      >
        go to root page
      </button>
    </>
  );
}

export default About;
