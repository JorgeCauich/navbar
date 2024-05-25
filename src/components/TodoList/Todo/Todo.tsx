import { Todo as ModelTodo } from "../../../models/todo.model";
import './Todo.css';

export function Todo({ todo, onDelete }: { todo: ModelTodo, onDelete: any }) {

    return (
        <div className="card shadow-sm border-0 mb-3">
            <div className="card-body py-3">
                <div className="d-flex justify-content-between">
                    <span className="fw-semibold fs-5">{todo.description}</span>
                    <button onClick={() => {
                        onDelete(todo.id);
                    }} type="button" className="btn btn-outline-danger">Remove</button>
                </div>
            </div>
        </div>
    );
}