import React from 'react';
import classes from './Main.module.css';
import Button from './elements/Button';
import Accordion from './elements/Accordion';
import footprint1 from '../images/tourism_footprint.png';
import footprint2 from '../images/eating_footprint.png';
import footprint3 from '../images/videoGames_footprint.jpeg';
import ImageSlider from "react-image-comparison-slider";
import footprint from '../images/footprint.png'
import earth1 from '../images/earth_clean.png';
import earth2 from '../images/earth_polluted.png';


function Main(){
    return(
        <div>
            
            <div className={classes.titlecontainer}>
                <div className={classes.banner1}></div>
                <div className={classes.sitetitle}>
                    <h1> Better future</h1> 
                    <p>A carbon footprint is the total amount of greenhouse gases (including carbon dioxide and methane) that are generated by our actions.
                        To have the best chance of avoiding a 2℃ rise in global temperatures, the average global carbon footprint per year needs to drop under 2 tons by 2050.</p>
                    <p>Lowering individual carbon footprints doesn’t happen overnight! By making small changes to our actions, we can start making a big difference.</p> 
                    <div className={ classes.sitetitlebuttons }>
                        <Button link={"/video"} title="See my Footprint!" className={classes.button}/>
                    </div> 
                </div>
            </div>
            


            <div className={ classes.beforeContainer }>
                <div className={ classes.beforeHolder } >
                    <ImageSlider image1= { earth1 } image2= { earth2 } sliderInitialPosition={ 0.4 } alt="earth" />
                </div>

                <div className= { classes.compareContent }>
                    <h1>What is this page about?</h1>
                    <p>
                        The carbon footprint is an important component of the Ecological Footprint, since it is one competing demand for biologically productive space. 
                    </p>
                    <p>
                        The carbon Footprint is currently 60 percent of humanity’s overall Ecological Footprint and its most rapidly growing component. Humanity’s carbon Footprint has 
                        increased 11-fold since 1961. Reducing humanity’s carbon Footprint is the most essential step we can take to end overshoot and live within the means of our planet. 
                    </p>
                    <p>
                        We help you to calculate your affect on the environment!
                    </p>
                </div>
            </div>

            {/* <div className={classes.line}></div> */}

            <div className={classes.banner2}>
                <div className={classes.banner2container}>
                    <div className={classes.banner2content}>
                        <h1 className={classes.sectionTitle}>Lets take the fist steps</h1> 
                        <div className={ classes.sectionText }>
                            <p>
                                When calculating a carbon footprint, a lot of factors are taken into consideration. For example, driving to the grocery store burns a certain amount of fuel, 
                                and fossil fuels are the primary sources of greenhouses gases. But that grocery store is powered by electricity, and its employees probably drove to work, 
                                so the store has its own carbon footprint.In addition, the products that the store sells were all shipped there, so that must also be factored into the total 
                                carbon footprint.
                            </p>
                            <p>Beyond that, the fruits, vegetables, and meats that the store sells were all grown or raised on farms, a process that produces methane,
                                which has a greenhouse effect 25 times greater than CO2.
                            </p>
                            <p>All of those elements must be combined to understand the full carbon footprint of a given activity.</p>
                            <p> Although adding up one’s individual carbon footprint can be difficult, online calculators can do some of the work for you, giving a rough estimate of your carbon 
                                footprint based on the size of your household, the efficiency of your appliances, how much you drive or fly, what you eat, and how much you recycle.
                            </p>
                        </div>
                    </div>  
                    <div className={classes.cardcontainer}>
                        <a className={classes.card} href="/vehicle">
                            <h2>Travel habits</h2>
                            <img className={classes.footprints} src={ footprint1 } alt="footprint"></img>
                        </a>
                        <a className={classes.card} href="/food">
                            <h2>Eating habits</h2>
                            <img className={classes.footprints} src={ footprint2 } alt="footprint"></img>
                        </a>
                        <a className={classes.card} href="/ev">
                            <h2>Energy consumption</h2>
                            <img className={classes.footprints} src={ footprint3 } alt="footprint"></img>
                        </a>
                    </div>
                </div>
            </div> 
            <div className={classes.section3}>
                <div className={ classes.section3container }>
                    <h1 className={classes.section3Title}>Our motivations</h1>
                    <Accordion
                    panel1Heading="Global climate change"
                    panel2Heading="Greenhouse gases" 
                    panel3Heading="Carbon offseting"
                    panel1Subheading="It's hard to be an iceberg these days." 
                    panel2Subheading="Beyond the cow fart..."
                    panel3Subheading="Earth is not alone. Do you back her up?"
                    panel1Text="The effects of human-caused global warming are happening now, are irreversible on the 
                    timescale of people alive today, and will worsen in the decades to come. Glaciers have shrunk, 
                    ice on rivers and lakes is breaking up earlier, plant and animal ranges have shifted and trees are 
                    flowering sooner."
                    panel2Text="Greenhouse gases are gases in Earth’s atmosphere that trap heat. They let sunlight pass 
                    through the atmosphere, but they prevent the heat that the sunlight brings from leaving the atmosphere."
                    panel3Text="You can make a difference! You can plant trees, or support environmentally friendly movements
                    like a family business focusing on recycling or eating vegan food once or twice. Its your choice."
                    />   
                    <Button link={"/video"} title="Next to Footprint" className={classes.button}/>
                </div>
            </div>
            
            <div className= { classes.anchorFootprint }>
                <a href="/"><img src={ footprint } alt="footprint" ></img></a>
            </div>

        </div>
       
    )
}

export default Main;