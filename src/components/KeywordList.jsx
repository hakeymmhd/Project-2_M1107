import React from "react";
import keywords from "../API/Keywords";

function KeywordList() {
    let listSpices = keywords.spices.map((record, index) => {
        return (
            <button key={index} onClick={() => {}}>{record}</button>
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
        <div className="Keywords">Select your ingredients
            <div className="Spices">{listSpices}</div>
            <div className="Pantry">{listPantry}</div>
            <div className="Refrigerator">{listRefrigerator}</div>
            <div className="Condiments">{listCondiments}</div>
            <div className="Vegetables">{listVegetables}</div>
            <div className="CannedGoods">{listCannedGoods}</div>
        </div>
    )
}

export default KeywordList;