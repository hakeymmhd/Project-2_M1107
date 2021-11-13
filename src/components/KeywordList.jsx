import React from "react";
import keywords from "../API/Keywords";

function KeywordList(props) {
    
    let listSpices = keywords.spices.map((record, index) => {
        return (
            <button key={index} onClick={() => {props.parentCallback(record)}}>{record}</button>
        )
    })

    let listPantry = keywords.pantry.map((record, index) => {
        return (
            <button key={index} onClick={() => {}}>{record}</button>
        )
    })

    let listRefrigerator = keywords.refrigerator.map((record, index) => {
        return (
            <button key={index} onClick={() => {}}>{record}</button>
        )
    })

    let listCondiments = keywords.condiments.map((record, index) => {
        return (
            <button key={index} onClick={() => {}}>{record}</button>
        )
    })

    let listVegetables = keywords.vegetables.map((record, index) => {
        return (
            <button key={index} onClick={() => {}}>{record}</button>
        )
    })

    let listCannedGoods = keywords.cannedGoods.map((record, index) => {
        return (
            <button key={index} onClick={() => {}}>{record}</button>
        )
    })
    return (
        <div className="Keywords"><h3>Select your ingredients</h3>
            <div className="Spices">Spices: {listSpices}</div>
            <div className="Pantry">Pantry: {listPantry}</div>
            <div className="Refrigerator">Refrigerator: {listRefrigerator}</div>
            <div className="Condiments">Condiments: {listCondiments}</div>
            <div className="Vegetables">Vegetables: {listVegetables}</div>
            <div className="CannedGoods">Canned Goods: {listCannedGoods}</div>
        </div>
    )
}

export default KeywordList;