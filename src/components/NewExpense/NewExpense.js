import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [hiddenCheck, setHiddenCheck] = useState(false);

  const saveExpenseDate = (params) => {
    const expenseData = {
      ...params,
      id: Math.random().toString(),
    };
    // console.log("IN New Expense");
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  const addNewExpenseHandler = (event) => {
    event.preventDefault();
    setHiddenCheck(!hiddenCheck);
  };
  const onCancelHandler = (check) => {
    setHiddenCheck(check);
  };

  return (
    <div className="new-expense">
      {/* { hiddenCheck? */}
      <ExpenseForm
        onSaveExpenseDate={saveExpenseDate}
        hiddenCheck={!hiddenCheck}
        onCancel={onCancelHandler}
      />

      <button onClick={addNewExpenseHandler} hidden={hiddenCheck}>
        Add New Expense
      </button>
    </div>
  );
};

export default NewExpense;
