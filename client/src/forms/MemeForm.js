import { useContext, useEffect } from 'react';
import { BeakerIcon } from '@heroicons/react/outline';
import { SwitchHorizontalIcon } from '@heroicons/react/outline';
import LoadingComp from '../components/Loading';
import { AppContext } from '../context/appContext';

export default function MemeForm(props){
    const {
        randomMeme,
        getMemes
    } = useContext(AppContext);

    const {
        handleSubmit,
        handleChange,
        inputs,
        getRandom
    } = props

    useEffect(() => {
        if(!randomMeme.imgSrc){
            getMemes()
        }
    });

    return(
        <>
            { randomMeme.imgSrc ?
                <div className='rounded pt-3 px-3 mx-auto flex flex-col'>
                    <h1 className='border-solid border-2 border-navy p-2 text-center bg-white rounded font-normal text-navy'>{randomMeme.name}</h1>
                    <div className='flex pt-2 flex-col lg:flex-row flex-nowrap lg:self-center'>
                        <img className='mx-auto rounded border-white border-4 m-3 lg:m-0 lg:flex image' src={randomMeme.imgSrc} alt='initial-meme' />
                        <span className='flex flex-col p-3 m-2'>
                            <span className='flex flex-row lg:space-x-3'>
                                <button className='flex-grow text-xs px-4 p-1 m-1 mx-auto font-medium rounded-full w-auto bg-cream border-b-4 border-yellow-400 text-indigo-800 inline-flex items-center' onClick={handleSubmit}>
                                    <span> Generate </span>
                                    <BeakerIcon className='w-5'/>
                                </button>
                                <button className='flex-grow text-xs lg:h-8 px-4 p-1 m-1 mx-auto font-medium rounded-full w-auto bg-babyBlue text-indigo-800 border-b-4 border-blue-400 inline-flex items-center' onClick={getRandom}>
                                    <span> Randomize </span>
                                    <SwitchHorizontalIcon className='w-5'/>
                                </button>
                            </span>
                            <span className='flex flex-col lg:space-y-3 lg:p-3'>
                                <input required className='lg:h-20 flex-grow focus:ring-2 text-xs w-auto focus:ring-gray-200' type='text' name='topText' placeholder='First text' value={inputs.topText} onChange={handleChange}/>
                                <input required className='lg:h-20 flex-grow focus:ring-2 text-xs w-auto focus:ring-gray-200' type='text' name='bottomText' placeholder='Second text' value={inputs.bottomText} onChange={handleChange}/>
                            </span>
                        </span>
                    </div>
                </div>
                
            :
                <LoadingComp/>
            }
            
        </>
    )
};
