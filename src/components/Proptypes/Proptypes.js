import React from 'react';
import Profile from './Profile';

class Proptypes extends React.Component {
    render () {
        return (
            <React.Fragment>
                <Profile name='Cristian' email='teke99x@gmail.com' bio='Esta es mi biografia...' age={28}/>
            </React.Fragment>
        )
    }
}

export default Proptypes;