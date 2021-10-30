const cardStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px 20px',
    // justifyContent: 'center'
    
}

const card = {
    height: '60px',
    // backgroundColor: '#212529',
    backgroundColor: '#05324F',
    color: '#fff',
    flexBasis: '250px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
}

const TopInfo = () => {
    return(
        <div style={cardStyle}>
            <div style={card}>Lamb: 39 CO2 kg equivalent</div>
            <div style={card}>Beef: 27 CO2 kg equivalent</div>
            <div style={card}>Pork: 12 CO2 kg equivalent</div>
            <div style={card}>Chicken: 7 CO2 kg equivalent</div>
            {/* source of data: https://www.greeneatz.com/foods-carbon-footprint.html */}
        </div>
    )
}

export default TopInfo