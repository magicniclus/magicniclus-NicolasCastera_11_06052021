import React, { Component } from 'react';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

export default class Page404 extends Component{

    render(){
        return (
        <div className="globalContainer">
            <Header />
            <div className='notFoundContainer'>
                <h1 className='number'>404</h1>
                <span className="oups">Oups! La page ue vous demandez n'existe pas.</span>
                <NavLink to="/">
                    Retourner sur la page d'accueil
                </NavLink>
            </div>
        </div>
    );
    }
};