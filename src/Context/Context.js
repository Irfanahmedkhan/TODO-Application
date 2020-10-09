import React, { createContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from './localstorage'



export const Context = createContext()

const Contextprovider = (props) => {


    const [TODO, setTODO] = useLocalStorage('TODO',[])    

        const TODOO = () => {

            setTODO([...TODO])

}

    const addTODO = (title, check) => {
        setTODO([...TODO, { title, check, id: uuidv4() }])
    }

    const CompleteTODO = (id) => {
        TODO.map (ok => {
            if (id === ok.id) {
                ok.check = true;
                TODOO()
            }
            return (
                <>
                </>
            )
            
        })

    }
    const removeTODO = (id) => {
        setTODO(TODO.filter(todo => todo.id !== id))

    }


    return (

        <Context.Provider value={{ TODO, addTODO, CompleteTODO, removeTODO }}>

            {props.children}

        </Context.Provider>

    )
}

export default Contextprovider
