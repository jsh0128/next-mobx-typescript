import { observer } from "mobx-react-lite";
import useStore from "common/hooks/useStore";

const Count = () => {
  const {
    CountStore: { count, increase, decrease },
  } = useStore();

  return (
    <div>
      <button onClick={increase}>+</button>
      <span>{count}</span>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default observer(Count);
