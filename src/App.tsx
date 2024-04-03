import React from 'react';
import './style/style.scss';
import ReactDOM from 'react-dom';
import Products from "./pages/Products";

const App = () => {
    return (
        <React.StrictMode>
            <Products/>
        </React.StrictMode>
    );
};
ReactDOM.render(<App/>, document.getElementById('root'));

