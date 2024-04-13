import { useState } from "react";

type Props = {
  defaultCount?: number;
};

export const Counter = ({ defaultCount = 10 }) => {
  const [count, setCount] = useState(defaultCount);

  return (
    <>
      <button onClick={() => setCount((v) => v + 1)}>
        {`Count: ${count}`}
      </button>
    </>
  );
};
