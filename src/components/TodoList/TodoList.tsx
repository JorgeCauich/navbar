import React, { useEffect, useState } from "react";
import Todo from "../../models/todo.model";
import { Todo as TodoComponent } from "./Todo/Todo"

export function TodoList() {

    const [tasks, setTasks] = useState<Array<Todo>>([]);
    const [inputValue, setInputValue] = useState<string>('');


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };


    useEffect(() => {
        const tasksString: string | null = localStorage.getItem("tasks");
        if (tasksString !== null) {
            const tasks = JSON.parse(tasksString) as Array<Todo>;
            setTasks(tasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        let newIdTask = tasks.length + 1;
        let model = new Todo(newIdTask, inputValue);
        setTasks(prevItems => [...prevItems, model]);
        setInputValue('');
    };


    const handleDelete = (id: number) => {
        setTasks(tasks.filter(t => t.id != id));
    }

    const todos = tasks.map((t, index) => {
        return <TodoComponent key={index} todo={t} onDelete={handleDelete} />
    });

    return (
        <>
            <div className="container mb-3">
                <h1 className="mb-4">Lista de tareas</h1>
                <form className="row g-3 align-items-center" onSubmit={handleSubmit}>
                    <div className="col-11">
                        <input value={inputValue} onChange={handleChange} required
                            typeof="text" className="form-control" id="exampleFormControlInput1" placeholder="Agregar nueva tarea" />
                    </div>
                    <div className="col-1">
                        <button type="submit" className="btn btn-primary">Agregar</button>
                    </div>
                </form>
            </div>

            <div className="container">
                {todos}
            </div>
        </>
    );
}