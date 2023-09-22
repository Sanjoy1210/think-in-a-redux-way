import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {addBook} from "../redux/booking/actions.js";

function InputForm(props) {
    const allBook = useSelector((state) => state.allBook);
    const dispatch = useDispatch();

    const [inputValues, setInputValues] = useState({
        from: "",
        to: "",
        date: "",
        guests: 0,
        ticketClass: "",
    });

    const handleChange = (e) => {
        setInputValues((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newBook = {
            id: allBook.length === 0 ? 1 : allBook[allBook.length - 1].id + 1,
            ...inputValues,
        };

        dispatch(addBook(newBook));

        // clear the field
        setInputValues({
            from: "",
            to: "",
            date: "",
            guests: 0,
            ticketClass: "",
        });
    }

    return (
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form className="first-hero lws-inputform" onSubmit={handleSubmit}>
                    {/* From */}
                    <div className="des-from">
                        <p>Destination From</p>
                        <div className="flex flex-row">
                            <img src="/images/icons/Frame.svg" alt="" />
                            <select
                                className="outline-none px-2 py-2 w-full"
                                name="from"
                                id="lws-from"
                                required
                                value={inputValues.from}
                                onChange={handleChange}
                            >
                                <option value="" hidden>Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    {/* To */}
                    <div className="des-from">
                        <p>Destination To</p>
                        <div className="flex flex-row">
                            <img src="/images/icons/Frame.svg" alt="" />
                            <select
                                className="outline-none px-2 py-2 w-full"
                                name="to"
                                id="lws-to"
                                required
                                value={inputValues.to}
                                onChange={handleChange}
                            >
                                <option value="" hidden>Please Select</option>
                                <option>Dhaka</option>
                                <option>Sylhet</option>
                                <option>Saidpur</option>
                                <option>Cox's Bazar</option>
                            </select>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="des-from">
                        <p>Journey Date</p>
                        <input
                            type="date"
                            className="outline-none px-2 py-2 w-full date"
                            name="date"
                            id="lws-date"
                            required
                            value={inputValues.date}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Guests */}
                    <div className="des-from">
                        <p>Guests</p>
                        <div className="flex flex-row">
                            <img src="/images/icons/Vector (1).svg" alt="" />
                            <select
                                className="outline-none px-2 py-2 w-full"
                                name="guests"
                                id="lws-guests"
                                required
                                value={inputValues.guests}
                                onChange={handleChange}
                            >
                                <option value="" hidden>Please Select</option>
                                <option value="1">1 Person</option>
                                <option value="2">2 Persons</option>
                                <option value="3">3 Persons</option>
                                <option value="4">4 Persons</option>
                            </select>
                        </div>
                    </div>

                    {/* Class */}
                    <div className="des-from !border-r-0">
                        <p>Class</p>
                        <div className="flex flex-row">
                            <img src="/images/icons/Vector (3).svg" alt="" />
                            <select
                                className="outline-none px-2 py-2 w-full"
                                name="ticketClass"
                                id="lws-ticketClass"
                                required
                                value={inputValues.ticketClass}
                                onChange={handleChange}
                            >
                                <option value="" hidden>Please Select</option>
                                <option>Business</option>
                                <option>Economy</option>
                            </select>
                        </div>
                    </div>

                    <button
                        className="addCity"
                        type={allBook.length >= 3 ? "button" : "submit"}
                        disabled={allBook.length >= 3}
                        id="lws-addCity"
                    >
                        <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span className="text-sm">Book</span>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default InputForm;