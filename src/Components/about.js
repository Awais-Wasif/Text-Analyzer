import React, { useState } from 'react'

export default function About(prop) {

    const [mystyle,setmyStyle] = useState({
        color : 'black',
        backgroundColor : 'white'
    })

    const [buttonText,setButtonText] = useState("Change to Dark Mode")


    const ToggleStyle = () =>
    {
        if(mystyle.backgroundColor ==='black')
        {
            setmyStyle({
                color : 'black',
                backgroundColor : 'white'
            })

            setButtonText("Change to Dark Mode")
        }
        else
        {
            setmyStyle({
                color : 'white',
                backgroundColor : 'black'
            })      

            setButtonText("Change to Light Mode")
        }
    }


  return (
    prop.check && <div className="container" style={mystyle}>
        <button type="button" onClick={ToggleStyle} className="btn btn-secondary">{buttonText}</button>
    </div>
  )
}
