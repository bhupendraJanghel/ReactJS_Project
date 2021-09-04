import React from 'react'
import { useState } from 'react';
export const AddTodo = ({onAddTodo}) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit=(e)=>{

        e.preventDefault();
        if(!title || !desc){
            alert("Title or description can not be blank")
        }else{
            onAddTodo(title,desc)
            setTitle("");
            setDesc("");
        }
      
    }
    return (
        <div className="container my-3">
            <h3>Add Task</h3>
            <form className="container" onSubmit={submit}>
                <div className="mb-3">
                    <label html-for="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label html-for="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}  className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Task</button>
            </form>
        </div>
    )
}
