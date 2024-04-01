import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [ newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
      let totalExpenses = expenses.reduce((total, item) => {
        return total + item.cost;
      }, 0);
      if (event.target.value > totalExpenses) {
        dispatch({ payload: event.target.value, type: 'SET_BUDGET' });
        setNewBudget(event.target.value);
      } else {
        alert('You cannot reduce the budget value lower that spending')
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