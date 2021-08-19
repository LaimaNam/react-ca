import { useState } from 'react';

const FuncButton = ({ usernmae }) => {
  const [count, setCount] = useState(0);
  const [anotherCount, setAnotherCount] = useState(100);

  let style = {
    background: 'black',
    color: 'white',
  };

  const clickHandler = () => {
    setCount(count + 1);
    setAnotherCount(anotherCount - 1);
  };

  return (
    <button style={style} onClick={clickHandler}>
      Function component {count}:{anotherCount}, {usernmae}
    </button>
  );
};

export default FuncButton;
