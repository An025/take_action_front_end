import {Link} from "react-router-dom";
import axios from 'axios';

const Recipee = props => {

    const recipeeCardStyle = {
        
        // backgroundColor: '#212529',
        backgroundColor: '#05324F',
        // display: 'flex',
        textAlign: 'center',
        height: '200px',
        width: '200px',
        margin: '10px'
    };

    const imageStyle = {
        width: '100%',
        height: '75%',
        // maxHeight: '100%'
        // width: '110px',
        //height: '110px',
        padding: '4px',
        display: 'inline-block',

        objectFit: 'cover',
        opacity: '0.5'

    };

    const paragraphStyle = {
        color: 'white',
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '90%',
        height: '17%',
        margin: '8px',
        fontSize: '0.85rem',
        textDecoration: 'none'
    };

    const axiosHeader = {
        headers: {
            'Content-type' : 'application/json',
            'Authorization' : "Bearer " + localStorage.getItem("token")
        }
    };

    const handleClick = (event) => {
        
        // let username = event.target.parentNode.children[1].value;
        
        console.log("asd");

        let body = {
            'meal_id': props.recipee.id,
        };
  
    

        axios.post("api/v1/add-meal", body, axiosHeader)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        // history.push("/");
    }

    const elementStyle = {
        // display: 'block',
        // margin: '18px'
    };



    const linkTo = "food/recipee-details"

    return(
        <div style={recipeeCardStyle}>
            {/* <p style={paragraphStyle}>{props.recipee.title}</p> */}
            {/* <Link style={paragraphStyle} to={linkTo} state={{ from: 'occupation' }}> {props.recipee.title} </Link> */}
            <Link style={paragraphStyle} to={{ pathname: linkTo, state: {recipeeData: props} }}> {props.recipee.title} </Link>
            <img style={imageStyle} src={props.recipee.image} alt={props.recipee.title}></img>
            <button style={elementStyle} type="button" onClick={handleClick}>Add this meal to your log</button>
        </div>
    )
}

export default Recipee