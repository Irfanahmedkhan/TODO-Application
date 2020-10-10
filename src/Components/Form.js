import React, { useContext, useState } from 'react'
import { Context } from '../Context/Context'


const Form = () => {

    const { addTODO } = useContext(Context)

    const [title, settitle] = useState('')
    const [comments, setcomments] = useState('')
    const [description, setdescription] = useState('')
    const [check, setcheck] = useState(false)

    console.log(setcheck);
    
    const submitTODO = (e) => {
        e.preventDefault()
        settitle('')
        setcomments('')
        setdescription('')
        addTODO(title,  check, comments, description)
    }



    return (
        <div className='addtodo'>
            <form onSubmit={submitTODO} className='addform'>
                <div className='todo-input'>
                    <input type='text' required placeholder='TODO' value={title} onChange={(e) => settitle(e.target.value)} />
                    <input type='text' required placeholder='Comment' value={comments} onChange={(e) => setcomments(e.target.value)} />
                    <input type='text' required placeholder='Description' value={description} onChange={(e) => setdescription(e.target.value)} />
                </div>
                <div className='todo-input-button'>
                    <button type='submit'>ADD TODO</button>
                </div>
            </form>

        </div>

    )
}

export default Form

