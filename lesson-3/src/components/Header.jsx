import notes from "../assets/images/notes.png";
import tick from "../assets/images/double-tick.png";
import plus from "../assets/images/plus.png";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {added, allCompleted, clearCompleted} from "../redux/todos/actions";

function Header(props) {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(added(todo));
        setTodo("");
    }

    const handleComplete = () => {
        dispatch(allCompleted());
    }

    const handleClearCompleted = () => {
        dispatch(clearCompleted());
    }

    return (
        <div>
            <form
                className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
                onSubmit={handleSubmit}
            >
                <img
                    src={notes}
                    className="w-6 h-6"
                    alt="Add todo"
                />
                <input
                    type="text"
                    placeholder="Type your todo"
                    value={todo}
                    onChange={handleChange}
                    className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                />
                <button
                    type="submit"
                    className={`appearance-none w-8 h-8 bg-[url('${plus}')] bg-no-repeat bg-contain`}
                ></button>
            </form>

            <ul className="flex justify-between my-4 text-xs text-gray-500">
                <li className="flex space-x-1 cursor-pointer" onClick={handleComplete}>
                    <img
                        className="w-4 h-4"
                        src={tick}
                        alt="Complete"
                    />
                    <span>Complete All Tasks</span>
                </li>
                <li className="cursor-pointer" onClick={handleClearCompleted}>Clear completed</li>
            </ul>
        </div>
    );
}

export default Header;