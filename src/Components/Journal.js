import React from 'react';
import axios from "axios";
import Article from "./Article";
const convert = require("xml-js");

export default class Journal extends React.Component{
    state = {
        data: Object,
        loading: true,
        active: 'active'
    };
    async componentDidMount() {
            var self = this;
            axios
                .get("https://sweb.ru/export/turbojournal/", {
                    "Content-Type": "application/xml; charset=utf-8"
                })
                .then(function (response) {
                    const data = JSON.parse(convert.xml2json(response.data, {compact: true, spaces: 2})).rss.channel.item;
                    self.setState({data: data, loading: false});
                })
                .catch(function (error)  {
                    console.log(error);
                });
        };

    render(){
        return (
            <div className="journal">
                <div className="journal__container">
                    <div className="journal__title">Бортовой журнал</div>
                    <div className="journal__caption">Бортовой журнал</div>
                    { this.state.loading ?
                        (<div className="spinner">
                            <div className="head">
                            </div>
                        </div>)
                        : this.state.data.map((item, index) => {return <Article key={index} item={item} />})}
                </div>
            </div>
        );
    }
}
