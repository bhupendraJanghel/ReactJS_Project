import React from 'react'
import { Todo } from "./Todo";
export const Todos = (props) => {
    let myStyle = {
        minHeight: "60vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todo list</h3>
            {props.item.length === 0 ? "No todos to display" :

                props.item.map((item) => {
                    return (<Todo todo={item} key={item.sno} onDelete={props.onDelete} />)
                })
            }
        </div>
    )
}
