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
            <p>HI</p>
            {/* <p> {recipeeData.analyzedInstructions } </p> */}
            { steps.map((step) => (<p> {step.number} {" - "} {step.step} </p>)) }
            {/* {state.recipeData.map((recipee) => (<Recipee key={recipee.id} recipee={recipee}/>))} */}
        </div>
    )

}

export default RecipeeDetails