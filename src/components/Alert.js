import React from 'react';
import './Alert.css';

function Alert(props) {
    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
  
    return (
        props.alert && 
        ( // Add parentheses to conditionally render the alert
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}: </strong>{props.alert.msg}
            </div>
        )
    );
}

export default Alert;

