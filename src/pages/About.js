import React, { Component } from 'react';
import DropDownBtnLarge from '../components/DropDownBtnLarge';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { listForAboutPage } from '../services/dataManager';

export default class About extends Component {
    constructor() {
        super()
        this.data = listForAboutPage;
    }

    render() {
        return (
            <div className='globalContainer'>
                <Header />
                <main>
                    <div className='canvas'>
                        <img src="/img/IMG2.png" alt='paysage' />
                    </div>
                    <div className='container'>
                        {this.data.map((list) =>
                            <DropDownBtnLarge key={list.title} title={list.title} text={list.text} />
                        )}
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}