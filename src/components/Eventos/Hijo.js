import React from 'react';
import './global.css';


class Hijo extends React.Component {
    manejadorClick = () => {
        this.props.onSaludar("Ninja en React")
    }

    render () {
        return (
            <div className='box blue'>
                <p>Hijo</p>
                <button onClick={this.manejadorClick}>Saludar</button>
            </div>
        );
    }
}
export default Hijo;