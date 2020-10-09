import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import Details from './TODOdetail'


const TODOList = () => {

    const { TODO } = useContext(Context)



    return TODO.length ? (

        <div className='todo-list'>
                {TODO.map((TODO, i) => { return (<Details TODO={TODO} key={TODO.id} number={i} />); })}
        </div>

    )
        :
        (
            <div className='empty'>No Target set ... </div>

        )
}

export default TODOList