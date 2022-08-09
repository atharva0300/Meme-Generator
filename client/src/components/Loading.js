import Trollface from '../images/Trollface.svg';

const LoadingComp = () => {
    return(
        <div className="flex items-center h-screen justify-center ">
            <img className='animate-spin h-20' alt='Loading...' src={Trollface}/>
        </div>
    )
}

export default LoadingComp;