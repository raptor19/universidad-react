import React from 'react';

class HijoInstancia extends React.Component {
    state = {
        message: '****'
    }

    onDispatchAlert = (e, message = 'Alert desde el hijo') => {
        alert(message);
        this.setState({message});
    }

    render () {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={this.onDispatchAlert}>Hijo</button>
            </div>
        )
    }
} export default HijoInstancia;