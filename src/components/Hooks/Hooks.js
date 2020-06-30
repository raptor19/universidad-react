import React from 'react';
import HookuseState from './HookuseState';
import HookuseEffect from './HookuseEffect';
import HookUseLayoutEffect from './HookUseLayoutEffect';
import HookUseContext from './HookUseContext';
import HookUseRef from './HookUseRef';
import SearchProduct from './SearchProducts';
import HookUseReduce from './HookUseReduce';
import HookUseImperativeHandle from './HookUseImperativeHandle';
import ReactMemo from './ReactMemo';
import HookUseCallback from './HookUseCallback';
import HookPersonalizado from './HookPersonalizado';

const Hooks = () => {
    return ( 
        <div>
            <h1>Hooks</h1>
            <HookuseState/>
            <HookuseEffect/>
            <HookUseLayoutEffect/>
            <HookUseContext/>
            <HookUseRef/>
            <SearchProduct/>
            <HookUseReduce/>
            <HookUseImperativeHandle/>
            <ReactMemo/>
            <HookUseCallback/>
            <HookPersonalizado/>
        </div>
     );
}
    
export default Hooks;