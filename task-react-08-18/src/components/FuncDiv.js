import FuncButton from './FuncButton';

const FuncDiv = ({ contentH3, contentP }) => {
  return (
    <>
      <h3>{contentH3}</h3>
      <p>{contentP}</p>
      <FuncButton buttonText="I am FuncButton - Click me!" />
    </>
  );
};

export default FuncDiv;
