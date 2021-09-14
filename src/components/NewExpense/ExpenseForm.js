import React, { useState, useEffect } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [hiddenCheck, setHiddenCheck] = useState(props.hiddenCheck);

  useEffect(() => {
    setHiddenCheck(props.hiddenCheck);
  }, [props.hiddenCheck])


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // Alternative Way=01
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
    // });
    // Alternative Way=02
    // setUserInput((prevState)=>{
    //     return{...prevState,enteredTitle:event.target.value}
    // })
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value,
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseDate(expenseData); 
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  const cancelHandler = (event) => {
    event.preventDefault();
    setHiddenCheck(!hiddenCheck);
    props.onCancel(false);
  }

  return (
    <form onSubmit={submitHandler} hidden={hiddenCheck} >
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2018-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button onClick={cancelHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
