const cardStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    flexWrap: 'wrap',
    gap: '10px 20px',
    justifyContent: 'center'
    
}

const card = {
    height: '60px',
    backgroundColor: '#212529',
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
            <div style={card}>Chicken: ... kg CO2 / kg</div>
            <div style={card}>Beef: ... kg CO2 / kg</div>
            <div style={card}>Pork: ... kg CO2 / kg</div>
        </div>
    )
}

export default TopInfo