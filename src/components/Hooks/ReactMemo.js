import React, {useState} from 'react';
import Title from './Title';
import Counter from './Counter';
import Header from './Header';
import TitleNested from './TitleNested';

const ReactMemo = () => {
    const [ title, setTitle ] = useState('');
    const [ count, setCount ] = useState(0);
    
    const handleAdd = () => {
        setCount(count + 1)
    }
    
    const handleInput = (e) => {
        setTitle(e.target.value)
    }
    return ( 
        <div>
            <Header title='React Memo'/>
            <input type="text" placeholder='Ingresar titulo' onChange={handleInput} value={title}/>
            <button onClick={handleAdd}>Add</button>
            <Title text={title}/>
            <TitleNested info={{text: title}}/>
            <Counter count={count}/>
        </div>
     );
}
 
export default ReactMemo;