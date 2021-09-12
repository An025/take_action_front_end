import { useLocation } from 'react-router-dom'

const RecipeeDetails = props => {

    const location = useLocation()
    const { recipeeData } = location.state

    const steps = recipeeData.recipee.analyzedInstructions[0].steps;

    return(
        <div>
            {/* {console.log(props)}
            {console.log(location)} */}
            {console.log(recipeeData)}
            {console.log(steps)}
            <h2> {recipeeData.recipee.title} </h2>
            {/* <h3>Summary:</h3>
            { recipeeData.recipee.summary } */}
            <h5>Preparation steps:</h5>
            {/* <p> {recipeeData.analyzedInstructions } </p> */}
            { steps.map((step) => (<p> {step.number} {" - "} {step.step} </p>)) }
            {/* {state.recipeData.map((recipee) => (<Recipee key={recipee.id} recipee={recipee}/>))} */}
            
            <h5>Find more info at:</h5>
            <a href={ recipeeData.recipee.sourceUrl }> { recipeeData.recipee.sourceName } </a>
        </div>
    )

}

export default RecipeeDetails