import React from 'react';
import Header from './Header';
import useSizes from './useSizes';

const HookDebugValue = () => {
    const {height,width} = useSizes();
    return ( 
        <div>
            <Header title='Hook DebugValue'/>
            <h3>Width: {width}px Height: {height}px</h3>           
        </div>
     );
}
 
export default HookDebugValue;