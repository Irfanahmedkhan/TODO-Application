import React, { useContext, useState } from 'react'
import { Context } from '../Context/Context'


const Form = () => {

    const { addTODO } = useContext(Context)

    const [title, settitle] = useState('')
    const [check, setcheck] = useState(false)
    console.log(setcheck);
    
    const submitTODO = (e) => {
        e.preventDefault()
        settitle('')
        addTODO(title,  check)
    }



    return (
        <div className='addtodo'>
            <form onSubmit={submitTODO} className='addform'>
                <input type='text' required placeholder='TODO' value={title} onChange={(e) => settitle(e.target.value)} />
                <button type='submit'>Add TODO</button>
            </form>
        </div>

    )
}

export default Form

