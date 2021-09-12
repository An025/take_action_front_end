

const Recipee = props => {

    const recipeeCardStyle = {
        color: 'white',
        backgroundColor: '#212529',
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
        display: 'inline-block'
    };

    const paragraphStyle = {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '90%',
        height: '17%',
        margin: '8px',
        fontSize: '0.85rem'

    };

    return(
        <div style={recipeeCardStyle}>
            <p style={paragraphStyle}>{props.recipee.title}</p>
            <img style={imageStyle} src={props.recipee.image}></img>
        </div>
    )
}

export default Recipee