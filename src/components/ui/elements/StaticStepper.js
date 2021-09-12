import React from 'react';
import "./StaticStepper.scss";

/* <!-- Stepper CSS -->
<link href="css/addons-pro/steppers.css" rel="stylesheet">
<!-- Stepper CSS - minified-->
<link href="css/addons-pro/steppers.min.css" rel="stylesheet"></link> */

const StaticStepper = props => {

    return (
        <div className="container">
            <ul className="progressbar">
                <li>Calculate your footprint!</li>
                <li className="active">Learn your options!</li>
                <li>Act!</li>
            </ul>
        </div>
/*         <div class="row">
            <div class="col-md-12">
                <ul class="stepper stepper-horizontal">
                    <li class="completed">
                        <a href="#!">
                        <span class="circle">1</span>
                        <span class="label">First step</span>
                        </a>
                    </li>

                    <li class="active">
                        <a href="#!">
                        <span class="circle">2</span>
                        <span class="label">Second step</span>
                        </a>
                    </li>

                    <li class="warning">
                        <a href="#!">
                        <span class="circle"><i class="fas fa-exclamation"></i></span>
                        <span class="label">Third step</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div> */
    )
}

export default StaticStepper;
