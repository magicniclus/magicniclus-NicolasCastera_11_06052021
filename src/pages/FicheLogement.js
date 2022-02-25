import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import DropDownBtnSmall from '../components/DropDownBtnSmall';
import DropDownBtnSmallList from '../components/DropDownBtnSmallList';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LightBox from '../components/LightBox';
import StarRating from '../components/StarRating';
import Tags from '../components/Tags';
import { getAllList } from '../services/dataManager';

export default class FicheLogement extends Component {
    appart;
    constructor() {
        super();
        this.data = getAllList();
        this.url = window.location.href;
        this.getIdInUrl = this.url.split('/');
        this.appart = this.data.filter((appart) => {
            if (appart.id === this.getIdInUrl[4]) return appart;
            return null;
        })
        if (this.appart) this.appart = this.appart[0];
    }

    render() {
        if (this.appart === undefined) return (<Redirect to="/page404" />);
        return (
            <div className="ficheLogement">
                <Header />
                <main>
                    <LightBox img={this.appart.pictures} title={this.appart.title}/>
                    <div className='ficheLogement_globalContainer'>
                        <section className='ficheLogement_container_left'>
                            <h1>{this.appart.title}</h1>
                            <span className='city'>{this.appart.location}</span>
                            <div className='tagContainer'>
                                {this.appart.tags.map((tag) => (
                                    <Tags key={tag} tags={tag} />
                                ))}
                            </div>

                        </section>
                        <section className='ficheLogement_container_right'>
                            <div className='ficheLogement_container_right_host'>
                                <div className='ficheLogement_container_right_host_name'>
                                    <span>{this.appart.host.name}</span>
                                </div>

                                <img src={this.appart.host.picture} alt={this.appart.title}/>
                            </div>
                            <StarRating stars={this.appart.rating} />
                        </section>
                        <section className='btn'>
                            <DropDownBtnSmall title='Description' text={this.appart.description} />
                            <DropDownBtnSmallList title='Équipement' text={this.appart.equipment} />
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
};