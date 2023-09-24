import Todo from "./Todo";
import {useSelector} from "react-redux";

function TodoList(props) {
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters);

    const filteredByStatus = (todo) => {
        switch (filters.status) {
            case "incomplete":
                return !todo.completed;

            case "complete":
                return todo.completed;

            default:
                return true;
        }
    }

    const filteredByColor = (todo) => {
        if (filters.colors.length > 0) {
            return filters.colors.includes(todo.color);
        } else {
            return true;
        }
    }

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {
                todos
                    .filter(filteredByStatus)
                    .filter(filteredByColor)
                    .map(todo => <Todo key={todo?.id} {...todo} />)
            }
        </div>
    );
}

export default TodoList;