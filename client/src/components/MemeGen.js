import React, { useState, useEffect, useContext } from 'react';
import UserMemes from './UserMemes.js';
import MemeForm from '../forms/MemeForm.js';
import { AppContext } from '../context/appContext.js'
import axios from 'axios';

const {
    REACT_APP_POST_URL,
    REACT_APP_USERNAME,
    REACT_APP_PASSWORD
} = process.env

const initInputs = { topText: '', bottomText: '' }

export default function MemeGenerator(){
    const {
        // all memes from DB
        allMemes,
        // all current user's memes
        userMemes,
        setUserMemes,
        randomMeme,
        setRandomMeme
    } = useContext(AppContext)

    const [ inputs, setInputs ] = useState(initInputs);

    function handleChange(e){
        const { name, value } = e.target
            setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value,
        })
        );
    };

    function handleSubmit(e){
        e.preventDefault()
        const createdDate = JSON.stringify(new Date()).slice(1,11).replace('"', '')
        // sends inputs through as params to endpoint to complete meme creation
            setUserMemes(prevState => ([
                ...prevState,
                {
                    imgSrc: randomMeme.imgSrc,
                    initialUrl: randomMeme.initialUrl,
                    tempID: randomMeme.tempID,
                    _api_id: randomMeme.id,
                    created: createdDate
                }
            ]))
            // sets randomMeme key values to match default image's
            setRandomMeme({
                name: randomMeme.name,
                imgSrc: randomMeme.initialUrl,
                initialUrl: randomMeme.initialUrl,
                id: randomMeme.id
            })
        // reset inputs to init
        setInputs(initInputs)
    };

    const getRandom = (e) => {
        e.preventDefault()
        const randomMeme = allMemes[Math.floor(Math.random()*(73-1)+1)]
        setRandomMeme({
            name: randomMeme.name,
            imgSrc: randomMeme.url,
            initialUrl: randomMeme.url,
            id: randomMeme.id,
            boxes: randomMeme.box_count
    })
    };

    const mappedMemes = (memeObj) => 
        memeObj.map(meme => 
            <UserMemes
                key={meme.tempID}
                {...randomMeme}
                inputs={inputs}
                handleEdit={handleSubmit}
                handleChange={handleChange}
                tempID={meme.tempID}
                _api_id={meme._api_id}
                imgSrc={meme.imgSrc}
                created={meme.created}
                initialUrl={meme.initialUrl}
            />
        ).reverse()

        useEffect(() => {
            axios(REACT_APP_POST_URL, {
                method: 'POST',
                params: {
                    username: REACT_APP_USERNAME,
                    password: REACT_APP_PASSWORD,
                    font: 'arial',
                    text0: inputs.topText,
                    text1: inputs.bottomText,
                    template_id: randomMeme.id
                }}
            )
            .then((res) => 
            // sets preview img url to randomMeme imgSrc
                setRandomMeme(prevInputs => ({
                    ...prevInputs,
                    name: randomMeme.name,
                    imgSrc: res.data.data ? res.data.data.url : randomMeme.imgSrc,
                    tempID: res.data.data ? res.data.data.page_url.slice(22) : '',
                    initialUrl: randomMeme.initialUrl,
                    id: randomMeme.id
                })
                )
            )
            .catch(err => console.log(err))
        }, [inputs.topText, inputs.bottomText])


        return(
            <div className='flex flex-col pb-12 pt-16 overflow-scroll bg-blue-200 w-screen p-3'>
                    <MemeForm
                        inputs={inputs}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        getRandom={getRandom}
                    />
                    { userMemes ? mappedMemes(userMemes) : null }
                <p className='pt-14 text-center text-xs font-mono text-blue-300'> Quinnton Carter 2021 </p>
            </div>
        )
}