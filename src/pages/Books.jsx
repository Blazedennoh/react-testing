import { BooksModel } from '../Models/BooksModel'
import SingleBook from '../components/SingleBook/SingleBook';
import {useSelector} from "react-redux";
const Books = () => {
    const price=useSelector((state)=>state.cart.price)
    const numberOfCartItems=useSelector((state)=>state.cart.numberOfCartItems)

    return (
        <div className='p-[2rem]'>
            <div className='text-center'>
                <p>CART ITEMS{""} {numberOfCartItems}</p>
                <p>Total Charge: {""}sh. {price}</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-5 p-[1rem]'>
                {BooksModel.map((book, index) => (
                    <SingleBook book={book} index={index} />
                ))}
            </div>
        </div>
    )
}

export default Books