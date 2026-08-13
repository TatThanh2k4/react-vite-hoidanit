import { useState } from "react"

const TodoNew = (props) => {

    //useState hook (getter, setter)
    // const valueInput = "eric";
    const [valueInput, setValueInput] = useState("eric")

    const { addNewTodo } = props

    // addNewTodo("eric") //fire
    const handleClick = () => {
      addNewTodo(valueInput)
      setValueInput("");
    }

    const handleOnChange = (name) => {
      setValueInput(name)
    }

    return (
        <div className="todo-new">
        <input type="text"
          onChange={(event) => handleOnChange(event.target.value)} 
          //khi gõ gt hàm handleOnChange sẽ nhận gt và truyền cho biến name ở trên
          value={valueInput} // luôn thay đổi khi valueInput được cập nhật thay đổi
        />
        <button 
          style={{cursor: "pointer"}}
          onClick={handleClick} //khi nhấn add thì thằng con gửi yêu cầu render lên cha để thay đổi todoList rồi gửi lại thằng con
        >Add</button>
        <div>
          My text input is = {valueInput}
        </div>
      </div>
    )
}

export default TodoNew;