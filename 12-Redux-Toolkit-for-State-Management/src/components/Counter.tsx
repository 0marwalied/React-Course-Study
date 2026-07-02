import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import type { RootState } from "../app/store";
import { incrementByAmount } from "../app/features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-4">
      <p color="white">Counter: {count}</p>
      <Button
        status="normal"
        className="w-fit"
        onClick={() => dispatch(incrementByAmount(5))}
      >
        Click me
      </Button>
    </div>
  );
};

export default Counter;
