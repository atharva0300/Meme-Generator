import React, { useState, useEffect, useContext } from 'react';
import LoadingComp from '../components/Loading';
import axios from 'axios';
import { AppContext } from '../context/appContext';

const { 
    REACT_APP_POST_URL,
    REACT_APP_USERNAME,
    REACT_APP_PASSWORD
} = process.env

export default function UserMemes(props){
    const { 
        imgSrc,
        tempID,
        _api_id,
        created,
        initialUrl,
    } = props

    const {
        setUserMemes,
        submitMeme,
        userMemes
    } = useContext(AppContext)

    const [ toggleEdit, setToggleEdit ] = useState(false)
    const [ toggleSave, setToggleSave ] = useState(false)
    const [ inputs, setInputs ] = useState({
        topText: '',
        bottomText: '',
        alias: ''
    });
    const [ alias, setAlias ] = useState('')

    // create editable img obj
    const [ imgEditable, setImgEditable ] = useState({
        imgSrc: initialUrl,
        initialUrl: initialUrl,
        tempID: tempID,
        _api_id: _api_id,
        created: created
    });
    
    // delete from frontend state
    const deleteMeme = (id) => {
        const newMemes = userMemes.filter(memes => memes.tempID !== id)
        return setUserMemes(newMemes)
    };

    // save to DB
    function saveMeme(src, initial, id, name){
        deleteMeme(tempID)
        submitMeme(src, initial, id, name)
    };
    
    function handleChangeEdit(e){
        const { name, value } = e.target
            setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value,
        })
        );
    };
    
    // submits the edit
    const handleEdit = (e, id) => {
        const createdDate = JSON.stringify(new Date()).slice(1,11)
        e.preventDefault()
            deleteMeme(id)
            setUserMemes(prevState => ([
                ...prevState, {
                    imgSrc: imgEditable.imgSrc,
                    initialUrl: initialUrl,
                    tempID: imgEditable.tempID,
                    _api_id: _api_id,
                    created: createdDate
                },
            ]))
        setToggleEdit(prevState => !prevState)
        setInputs({
            topText: '',
            bottomText: ''
        })
    };

    useEffect(() => {
        axios(REACT_APP_POST_URL, {
            method: 'POST',
            params: {
                username: REACT_APP_USERNAME,
                password: REACT_APP_PASSWORD,
                font: 'arial',
                text0: inputs.topText,
                text1: inputs.bottomText,
                template_id: _api_id
            }
        })
        .then((res) => 
            setImgEditable(prevInputs => ({
                ...prevInputs, 
                imgSrc: res.data.data ? res.data.data.url : imgEditable.imgSrc,
                tempID: res.data.data ? res.data.data.page_url.slice(22) : imgEditable.tempID
            }))
        )
        .catch(err => console.log(err))
    }, [inputs.topText, inputs.bottomText])

    return(
        <>
        {imgSrc ?
            <div className='bg-cream inline-grid my-3 p-4'>
                { !toggleEdit ?
                    <div className='grid m-auto p-0 h-auto mx-auto w-auto'>
                        <p className='text-xs'> Local ID: '{tempID}' created: {created} </p>
                        <img src={imgSrc} alt={`user meme: ${tempID}`}/>
                        <div className='grid-cols-4 inline-grid mx-auto'>
                            { !toggleSave ? 
                            <>
                                <button className='col-span-1 text-sm m-2 p-1 rounded bg-soot text-white' onClick={()=> { setToggleEdit(prevState => !prevState) }}> edit </button>
                                <button className='col-span-1 text-sm m-2 p-1 rounded bg-salmon text-gray-700' onClick={() => deleteMeme(tempID)}> delete </button>
                                <button className='col-span-2 text-sm m-2 p-1 rounded bg-navy text-white' onClick={() => { setToggleSave(prevState => !prevState) }}> submit </button>
                            </>
                            :
                            <>
                                <button className='col-span-2 text-sm m-2 p-1 rounded bg-salmon text-white' onClick={() => { setToggleSave(prevState => !prevState) }}> cancel </button>
                                <button className='col-span-2 text-sm m-2 p-1 rounded bg-babyBlue text-white' onClick={() => { saveMeme(imgSrc, initialUrl, _api_id, alias) }}> submit </button>
                                <input className='col-span-4 text-sm' type='text' maxLength='18' pattern='[A-Za-z0-9]' onChange={e => setAlias(e.target.value)} title='Allowed: A-Z and 0-9' placeholder={`${alias||`Optional alias (press submit to skip)`}`}/>
                            </>
                            }
                        </div>
                    </div>
                    :
                    <div className='m-auto p-0 h-auto w-auto'>
                        <p className='text-xs'> Local ID: '{tempID}' created: {created} </p>
                        <img src={imgEditable.imgSrc} alt='editableImage'/>
                        <span className='grid grid-cols-4'>
                            <button className='col-span-1 text-sm m-2 p-1 rounded bg-salmon text-white' onClick={()=> setToggleEdit(prevState => !prevState)}> cancel </button>
                            <button className='col-span-1 text-sm m-2 p-1 rounded bg-soot text-white' onClick={(e) => handleEdit(e,tempID)}> save </button>
                            <button className='col-span-2 text-sm m-2 p-1 rounded bg-salmon text-gray-700' onClick={() => deleteMeme(tempID)}> delete </button>
                            <input required className='col-span-4 text-sm' name='topText' placeholder='Replacement text one' value={inputs.topText} onChange={handleChangeEdit}/>
                            <input required className='col-span-4 text-sm' name='bottomText' placeholder='Replacement text two' value={inputs.bottomText} onChange={handleChangeEdit}/>
                        </span>
                    </div>
                }
            </div>
            :
            <LoadingComp/>
            }
        </>
        )
}