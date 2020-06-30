import React from 'react';

const subtitleStyles = {
    fontWeight: 'bold'
}

const headerStyles  = {
    margin: '0.6em',
    borderRadius: '0.3em',
    border: '1px solid #d2d2d2',
    padding: '2em 0.4em',
    fontFamily: 'monospace',
    fontSize: '17px',
    textAlign: 'center'
}

class Header extends React.Component {
    
    render () {
        return (
            <div style={headerStyles}>
                <h2 style={subtitleStyles}>{this.props.title}</h2>
            </div>
        )
    }
} export default Header;