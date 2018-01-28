import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> The info is: {props.info} </p>
    </div>
);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props} />) : <p> Please Login </p> }
        </div>
    );
};

const AuthentcatedInfo = requireAuthentication(Info);

ReactDOM.render(<AuthentcatedInfo isAuthenticated = {true} info="There are the details"/>,
                            document.getElementById("app"));