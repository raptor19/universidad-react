import React from 'react';
import Computacion from './Computacion';
import Ropa from './Ropa';

class Fragment extends React.Component {
    render() {
        return (
            <div>
                <Computacion/>
                <Ropa/>
            </div>
        );
    }
}
export default Fragment;