import './App.css';
import './css/styles.css'
import StatefullExample from './day1-practice/components/beforeHooks/statefull';
import FetchDataHooks from './day1-practice/FetchHooks';
import CounterApp from './day1-practice/counterApp';
import CounterHooks from './day1-practice/Hooks/CounterHooks';
import TransferApp from './day2-practice/components';
import RouterApp from './day3-practice/index';
import ReactRedux from './day4-practice/react-redux';
import TodoList from './day4-practice/basic-crud';

function App() {
  return (
    <div className="App">
      <h2>Hello Everyone</h2>
      {/* <TransferApp /> */}
      {/* <RouterApp /> */}
      {/* <ReactRedux /> */}
      <TodoList />
    </div>
  );
}

export default App;
