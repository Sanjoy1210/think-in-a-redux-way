import InputForm from "./InputForm";
import TableRow from "./TableRow";
import {useSelector} from "react-redux";

function BookingArea() {
    const allBook = useSelector((state) => state.allBook);

    return (
        <section>
            {/* Input Data */}
            <InputForm />

            {/* Preview Data */}
            <div className="table-container">
                <table className="booking-table">
                    <thead className="bg-gray-100/50">
                        <tr className="text-black text-left">
                            <th>Destination From</th>
                            <th>Destination To</th>
                            <th className="text-center">Journey Date</th>
                            <th className="text-center">Guests</th>
                            <th className="text-center">Class</th>
                            <th className="text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
                        {
                            allBook?.map(book => <TableRow key={book?.id} {...book} />)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default BookingArea;