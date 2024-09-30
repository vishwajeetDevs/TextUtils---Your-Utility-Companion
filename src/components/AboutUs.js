import React, {useState} from 'react'

export default function AboutUs() {


    const[myStyle, setMyStyle] = useState ("light");
    const[color, changeColor] = useState ({
        color : "black",
        backgroundColor : "white"
    })
    const[button, changedButton] = useState ("Dark Mode");

    function buttonClicked() {
        if(myStyle === "light"){
            changeColor({
                color : "white",
                backgroundColor : "black"
            });
            setMyStyle("dark");
            changedButton("Light Mode")
        }
        else{
            changeColor ({
                color: "black",
                backgroundColor : "white"
            });
            setMyStyle("light")
            changedButton("Dark Mode")
        }
    }

    return (
        <>
        <div>
            <div className="container my-5" style={color}>
                <p>
                    Global warming is a term used for the observed century-scale rise in the average temperature of the Earth's climate system and its related effects. Scientists are more than 95% certain that nearly all of global warming is caused by increasing concentrations of greenhouse gases (GHGs) and other human-caused emissions.

                    Sign_Up_Now_round.jpg  Receive Free Global Warming Info!

                    Within the earth's atmosphere, accumulating greenhouse gases like water vapor, carbon dioxide, methane, nitrous oxide, and ozone are the gases within the atmosphere that absorb and emit heat radiation. Increasing or decreasing amounts of greenhouse gases within the atmosphere act to either hold in or release more of the heat from the sun.

                    10-climate-effects-EPA.pngOur atmosphere is getting hotter, more turbulent, and more unpredictable because of the “boiling and churning” effect caused by the heat-trapping greenhouse gases within the upper layers of our atmosphere. With each increase of carbon, methane, or other greenhouse gas levels in the atmosphere, our local weather and global climate is further agitated, heated, and “boiled.”

                    Global warming is gauged by the increase in the average global temperature of the Earth. Along with our currently increasing average global temperature, some parts of the Earth may actually get colder while other parts get warmer—hence the idea of average global temperature. Greenhouse gas-caused atmospheric heating and agitation also increase the unpredictability of the weather and climate, and dramatically increase the severity, scale, and frequency of storms, droughts, wildfires, and extreme temperatures.
                </p>
            </div>
        </div>
        <div className="container">
            <button type="button" className="btn btn-primary" onClick={buttonClicked} >{button}</button>
        </div>

        </>
    )
}
