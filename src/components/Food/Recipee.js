

const Recipee = props => {

    const recipeeCardStyle = {
        color: 'white',
        backgroundColor: '#212529',
        textAlign: 'center',
        height: '200px',
        width: '200px',
        margin: '10px'
    };

    return(
        <div style={recipeeCardStyle}>
            <p>{props.recipee.title}</p>
            
        </div>
    )
}

export default Recipee