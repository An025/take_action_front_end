import React, {useContext, useEffect} from 'react';
import classes from './Main.module.css';
import Accordion from './elements/Accordion';
import ImageSlider from "react-image-comparison-slider";
import footprint from '../images/footprint.png'
import reduce from '../images/reduce.jpg'
import line from '../images/line.png'
import bike from '../images/bike1.png'
import ecar from '../images/ecar.png'
import beef from '../images/beef.png'
import vegetables from '../images/vegetables.png'
import earth1 from '../images/earth_clean.png';
import earth2 from '../images/earth_polluted.png';
import PaginationContext from '../../context/PaginationContext';


function Main(){

    const context = useContext(PaginationContext);

    useEffect(() => {
        context.changeVisibility();
        console.log("main visibility: " + context.isVisible);
    }, [context])


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
                </div>
            </div> 

            <div className={classes.section4}>
                <h1 className={classes.sectionTitle}>How to reduce your carbon footprint?</h1> 
              
                <img className={classes.reduceImg} src={ reduce } alt="how to reduce the carbon" ></img>
                <ul>
                    <div className={classes.reduceDiv}>
                        <ol><span className={classes.circle}>1.</span> Transport:</ol>
                        <img className={classes.lineImg} src={ line } alt="line" ></img>
                        <p>Try one of the following ways to get to work or school</p>
                        <div className={classes.reduceDetails}>
                            <img className={classes.ecar} src={ ecar } alt="bike" ></img>
                                <div className={classes.type}>
                                    <p>Cycling</p>
                                    <p>Walking</p>
                                    <p>Public Transport</p>
                                    <p>Electric Car</p>
                                </div>
                           
                            <img className={classes.bike} src={ bike } alt="bike" ></img>
                        </div>
                    </div>

                    <div>
                        <ol><span className={classes.circle}>2.</span> Food:</ol>
                        <img className={classes.lineImg} src={ line } alt="line" ></img>
                        <div className={classes.reduceDetails}>
                            <img className={classes.vegetables} src={ vegetables } alt="vegetables" ></img>
                            <div className={classes.type}>
                                <p>Reduce intake of animal products and</p>
                                <p>Eat more vegetables</p>
                                <p>Eat local and seasonal produce</p>
                                <p>Try not to waste food</p>
                                <p>Recycle organic waste</p>
                            </div>
                            <img className={classes.beef} src={ beef } alt="beef" ></img>
                        </div>
                    </div>
                </ul>

                <img className={classes.bottomline} src={ line } alt="line" ></img>
            </div>

      
            <div className={classes.section3}>
                <div className={ classes.section3container }>
                {/* <img className={classes.save} src={ save } alt="save" ></img> */}

                    <h1 className={classes.section3Title}>Our motivations</h1>
                    <Accordion
                    panel1Heading="Global climate change"
                    panel2Heading="Greenhouse gases" 
                    panel3Heading="Carbon offseting"
                    panel1Subheading="It's hard to be an iceberg these days." 
                    panel2Subheading="Those filthy gases..."
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
                </div>
            </div>
            
            <div className= { classes.anchorFootprint }>
                <a href="/"><img src={ footprint } alt="footprint" ></img></a>
            </div>

        </div>
       
    )
}

export default Main;