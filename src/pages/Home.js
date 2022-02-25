import React, { Component } from 'react';
import { getList } from '../services/dataManager';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer'

export default class Home extends Component {
    /**
     * [description]
     * 
     * @constructor
     */
    constructor() {
        super();
        this.data = getList();
    }

    render() {
        return (
            <div className='globalContainer'>
                <Header />
                <main>
                    <div className='canvas'>
                        <img src="/img/IMG.png" alt='paysage' />
                        <span>Chez vous, partout et ailleurs</span>
                    </div>
                    <div className='card-container'>
                        {
                            this.data.map((appart) =>
                                <Card key={appart.id} title={appart.title} image={appart.image} id={appart.id} />
                            )}
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

}