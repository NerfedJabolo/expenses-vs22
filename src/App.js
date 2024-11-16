
import './App.css';

import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
    
  return (
    <div className="App">
      <NewExpense></NewExpense>
      <Expenses />
    </div>
  );
}

export default App;
