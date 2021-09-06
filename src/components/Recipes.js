import axios from 'axios';
import React, { useEffect, useState } from 'react';

const KitchenIDs = {
    kitchens : [
        45674,
        42344,
        42233,
        48855
      ]
}


const Recipes = props => {

    const [recipes, setRecipes] =  useState("");

   /* useEffect(() => {
        KitchenIDs.kitchens.map( kitchenID => {
            let Url = 'https://co2.eaternity.ch/api/kitchens/' + { kitchenID } + '/recipes'
            axios.get(Url)
            .then(kitchenRecipes => {
                console.log(kitchenRecipes)
                const gotRecipes = kitchenRecipes.data;

                setLoadedChars(
                selectedCharacters.map((char, index) => ({
                    name: char.name,
                    id: index + 1
                }))
                );
            })
            .catch(err => {
                console.log(err);
            });
            })
    }, [ KitchenIDs ]) */

    const config = {
        mode : "cors",
        headers : {"Content-Type" : "application/json"}
    }
    
    useEffect(() => {
        let Url = 'https://co2.eaternity.ch/api/kitchens'
        axios.get(Url, config)
        .then(kitchenRecipes => {
            console.log(kitchenRecipes)
/*                 const gotRecipes = kitchenRecipes.data;

            setLoadedChars(
            selectedCharacters.map((char, index) => ({
                name: char.name,
                id: index + 1
            }))
            ); */
        })
        .catch(err => {
            console.log(err);
        });
    }, [ KitchenIDs ])

    return (
        <>
        </>
    )
}

export default Recipes;