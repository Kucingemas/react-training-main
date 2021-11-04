import { useDispatch, useSelector } from "react-redux";

export default function CounterAppRedeux() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      dari redux
      <h1>{count}</h1>
      <button  className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded m-2" onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button  className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded m-2" onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
      <button  className="bg-green-500 hover:bg-green-400 text-white font-semibold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded m-2" onClick={() => dispatch({ type: "ZERO" })}>zero</button>

    </div>
  );
}
