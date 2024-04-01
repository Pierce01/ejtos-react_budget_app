import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [ newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
      let totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
      }, 0);
      const value = event.target.value;
      if (value <= totalExpenses) {
        alert('You cannot reduce the budget value lower than spending');
      } else if (value > 2000){
        alert('You cannot exceed a budget of 2000!');
      } else {
        dispatch({ payload: value, type: 'SET_BUDGET' });
        setNewBudget(value);
      }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;