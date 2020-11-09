import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header/Header.jsx'

class App extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Header />
                {renderRoutes(this.props.route.routes)}
            </React.Fragment>
        )
    }
}

export default {
    component: App
};