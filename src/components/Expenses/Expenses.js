import Card from "../UI/Card";
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";



const Expenses = (props) => {

  const expensesHandler = !props.items ? [] : props.items.map((item, pos) => {
    return(
      <ExpenseItems
      key={pos}
      title={item.title}
      amount={item.amount}
      date={item.date}
    ></ExpenseItems>
    )
  });
  
  return (
    <Card className="expenses">
      {expensesHandler}
    </Card>
  );
};

export default Expenses;
