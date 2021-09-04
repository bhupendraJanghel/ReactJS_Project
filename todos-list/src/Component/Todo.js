import React from 'react'

export const Todo = (props) => {
 
    return (
        <div>
          
                <h4>{props.todo.title}</h4>

            <p>{props.todo.desc}  <button className="btn btn-sm btn-danger"  style={{float: "right"}} onClick={() => { props.onDelete(props.todo) }}>delete</button></p>
            <hr />
        </div>
    )
}
