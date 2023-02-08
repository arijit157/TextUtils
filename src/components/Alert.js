import React from 'react'

export default function Alert(props) {

    let capitalizeAlertType = (alertType) => {
        let lower = alertType.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div className="alert-section" style={{height: "50px"}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalizeAlertType(props.alert.type)}</strong>: {props.alert.msg}
            </div>}
        </div>

    );
}
