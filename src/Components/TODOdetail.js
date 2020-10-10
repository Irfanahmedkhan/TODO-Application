import React, {useContext} from 'react'
import { Context } from '../Context/Context'


const Details = ({TODO}) => {

    const { CompleteTODO, removeTODO} = useContext(Context)

    return (
        
        <div className='title' > 
        
            <div className='title-heading'>

                <div className='title-heading-text'>

                    <h3 ><span>Title : </span>{TODO.title}
                    </h3>

                    <h6 className={TODO.check === false ? 'Pending' : "Complete"}>{TODO.check === false ? 'Pending' : "Completed"}</h6>

                    <h3> <span>Comment : </span>{TODO.comments}
                    </h3> 

                    <h3> <span>Description : </span>{TODO.description}</h3> 
                </div>

                
            </div>
          
            <div className='title-button'>
                <button onClick={() => removeTODO(TODO.id)} style={{color:"red"}}> X </button>  
                { TODO.check === false ? <button onClick={() => CompleteTODO(TODO.id)}> Done </button> : null}                   
            </div>

        
        </div>
        
        
    )
}

export default Details

