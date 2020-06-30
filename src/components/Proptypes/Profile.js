import React from 'react';
import PropTypes from 'prop-types';

class Profile extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
    }

    static defaultProps = {
        name: 'Usuario',
        bio: 'Bio del usuario',
        email: 'usuario@mail.com',
        age: 99
    }

    render (){
        const { name, bio ,email, age } = this.props;
        return (
            <div>
                <h1>Nombre: {name}</h1>
                <p>Edad: {age} anios</p>
                <p>Biografia: {bio}</p>
                <a href={`mailto:${email}`}>{email}</a>
            </div>
        )
    }
}

export default Profile;