import {Link} from "react-router-dom";

const Recipee = props => {

    const recipeeCardStyle = {
        backgroundColor: '#05324F',
        textAlign: 'center',
        height: '200px',
        width: '200px',
        margin: '10px'
    };

    const imageStyle = {
        width: '100%',
        height: '75%',
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

    const linkTo = "food/recipee-details"

    return(
        <div style={recipeeCardStyle}>
            <Link style={paragraphStyle} to={{ pathname: linkTo, state: {recipeeData: props} }}> {props.recipee.title} </Link>
            <img style={imageStyle} src={props.recipee.image} alt={props.recipee.title}></img>
        </div>
    )    
}

export default Recipee