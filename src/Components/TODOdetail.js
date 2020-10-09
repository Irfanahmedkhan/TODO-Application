import React, {useContext} from 'react'
import { Context } from '../Context/Context'


const Details = ({TODO}) => {

    const { CompleteTODO, removeTODO} = useContext(Context)

    return (
        
        <div className='title' > 
        <div className='title-heading'>
            <h3 > {TODO.title}
                <span className={TODO.check === false ? 'Pending' : "Complete"}>{TODO.check === false ? 'Pending' : "Completed"}</span>
            </h3>  
        </div>
          
        <div className='title-button'>
                <button onClick={() => removeTODO(TODO.id)} > X </button>  

                {
                    TODO.check === false ? <button onClick={() => CompleteTODO(TODO.id)}> Done </button> : null
                }   
                

            
        </div>

        
        </div>
        
        
    )
}

export default Details

