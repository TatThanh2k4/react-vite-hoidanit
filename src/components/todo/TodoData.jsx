const TodoData = (props) => {
  const { todoList , deleteTodo} = props;

  const handleClick = (id) => {
    deleteTodo(id)
  }

  return (
    <div className="todo-data">
      {todoList.map((item, index) => {//ham map se duyet qua tung phần tử trong todoList(giống vòng for nhưng khác là nó sẽ trả một gt mới)
        return(
        <div className={`todo-item`} key={item.id}> 
          <div>{item.name}</div>
          <button 
              onClick={()=> handleClick(item.id)}
              style={{ cursor: "pointer" }}>Delete</button>
        </div>//todo-item: css cho div va button ben duoi
      )
      })}
    </div>
  );
};

export default TodoData;
