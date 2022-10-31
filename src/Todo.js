import React from "react"

function Todo({todo}) {
    return(
        <>
        <label>
            <input type="checkbox" checked="todo.complete" />
        </label>
            {todo}
        </>
    )
}

export default Todo