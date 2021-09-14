import React from "react";
import ExpenseItems from "./ExpenseItems";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((item) => {
        return (
          <ExpenseItems
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          ></ExpenseItems>
        );
      })}
    </ul>
  );
};

export default ExpensesList;
