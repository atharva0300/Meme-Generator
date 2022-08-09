import { PlusCircleIcon } from '@heroicons/react/outline';
import { ViewListIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className='mx-auto text-cream rounded-tl-lg rounded-tr-lg fixed bottom-0 p-2 w-screen flex flex-row justify-evenly'>
            <Link to='/' className='text-sm w-full font-bold p-1 rounded hover:bg-blue-500 inline-flex items-center justify-center'>
                <span> Create </span>
                <PlusCircleIcon
                    className='w-5'
                />
            </Link>
            <Link to='/memes' className='text-sm w-full font-bold p-1 rounded hover:bg-blue-500 inline-flex items-center justify-center'>
                <span> View All </span>
                <ViewListIcon
                    className='w-5'
                />
            </Link>
        </nav>
    )
}

export default Navbar;