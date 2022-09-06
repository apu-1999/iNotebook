import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const [state, setMyState] = useState({
        "name" : "Apurva",
        "class" : "10A"
    });

    const update = () => {
        setTimeout(() => {
            setMyState({
                "name" : "Sandhya",
                "class" : "10B"
            })
        }, 1000);
    }

    return(
        <NoteContext.Provider value={{state:state, update:update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;