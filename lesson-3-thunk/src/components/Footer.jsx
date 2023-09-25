import {useDispatch, useSelector} from "react-redux";
import {colorChanged, statusChanged} from "../redux/filters/actions.js";

const numberOfTodos = (no_of_todos) => {
    switch (no_of_todos) {
        case 0:
            return "No task";
        case 1:
            return "1 task";
        default:
            return `${no_of_todos} tasks`;
    }
};

function Footer(props) {
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters);
    const dispatch = useDispatch();

    const todoRemaining = todos.filter(todo => !todo.completed).length;

    const handleStatusChange = (status) => {
        dispatch(statusChanged(status));
    }

    const handleColorChange = (color) => {
        if (filters.colors.includes(color)) {
            dispatch(colorChanged(color, "removed"));
        } else {
            dispatch(colorChanged(color, "added"));
        }
    }

    return (
        <div className="mt-4 flex justify-between text-xs text-gray-500">
            <p>{numberOfTodos(todoRemaining)} left</p>
            <ul className="flex space-x-1 items-center text-xs">
                <li className={`cursor-pointer ${filters.status === "all" ? "font-bold" : ""}`} onClick={() => handleStatusChange("all")}>All</li>
                <li>|</li>
                <li className={`cursor-pointer ${filters.status === "incomplete" ? "font-bold" : ""}`} onClick={() => handleStatusChange("incomplete")}>Incomplete</li>
                <li>|</li>
                <li className={`cursor-pointer ${filters.status === "complete" ? "font-bold" : ""}`} onClick={() => handleStatusChange("complete")}>Complete</li>
                <li></li>
                <li></li>
                <li className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${filters.colors.includes("green") ? "bg-green-500" : ""}`} onClick={() => handleColorChange("green")} />
                <li className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${filters.colors.includes("red") ? "bg-red-500" : ""}`} onClick={() => handleColorChange("red")} />
                <li className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${filters.colors.includes("yellow") ? "bg-yellow-500" : ""}`} onClick={() => handleColorChange("yellow")} />
            </ul>
        </div>
    );
}

export default Footer;