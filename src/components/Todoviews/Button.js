import React from 'react'

export default function Button() {
    const [active, setactive] = React.useState(false)
    const handleClick =()=>{

    }
    return (
        <div>
            <input type="text" className={`input ${active ? "input_hover":""}`}  />
            <button type="button" onClick={()=>setactive(true)} >flip</button>
                <div class="maincontainer">
                <div class="thecard">
                    <div class="thefront">
                        <h1>Front of Card</h1>
                            <input type="text" />
                        {/* <p>This is the front of the card. 
                            It contains important information. 
                            Please see overleaf for more details.</p> */}
                            </div>
                    <div class="theback">
                    <h1>Back of Card</h1>
                    <input type="text" />
                    
                    {/* <p>
                        Your use of this site is 
                        subject to the terms and conditions go
                        verning this and all transactions.</p>
                    <button>Submit</button> */}
                    </div>
                    
                </div>
                </div>
                
        </div>
    )
}
