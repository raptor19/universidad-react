import React, { forwardRef, useImperativeHandle, useState } from 'react';
const FancyInput = forwardRef((props, ref) => {
    const [text,setText] = useState('***');

    useImperativeHandle(ref,() => {
        return {
            dispachAlert: () => { alert('Hola')},
            setParragraph: (message) => { setText(message)}
        }
    })

    return ( 
        <div>
            <p>{text}</p>
            <input type="text"/>
        </div>
     );
})
 
export default FancyInput;