const TodoData = (props) => {
  const { todoList } = props;
  return (
    <div className="todo-data">
      {todoList.map((item, index) => {//ham map se duyet qua tung phần tử trong todoList(giống vòng for nhưng khác là nó sẽ trả một gt mới)
        return(
        <div className={`todo-item`} key={index.id}> 
          <div>{item.name}</div>
          <button>Delete</button>
        </div>//todo-item: css cho div va button ben duoi
      )
      })}
    </div>
  );
};

export default TodoData;
