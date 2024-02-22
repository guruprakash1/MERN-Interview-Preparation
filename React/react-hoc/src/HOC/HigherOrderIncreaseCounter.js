import React, { useState } from 'react';

const HigherOrderIncreaseCounter = (WrappedComponent) => {
  // Return a new component with the counter logic
  const NewComponent = (props) => {
    const [count, setCount] = useState(0);

    const increaseCounter = () => {
      setCount(count + 1);
    };

    return (
      <>
        {/* Render the wrapped component with additional props */}
        <WrappedComponent {...props} count={count} increaseCounter={increaseCounter} />
        {/* <p>Counter: {count}</p> */}
      </>
    );
  };

  return NewComponent;
};

export default HigherOrderIncreaseCounter;
