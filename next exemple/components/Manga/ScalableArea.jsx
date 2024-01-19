"use client"

import { useState } from "react"

const ScalableArea = ({ children }) => {

    const [marge, setMarge] = useState(-150)

    return (
        <div className="relative pt-3 h-[70svh] overflow-auto">
            <div style={{marginRight: (marge * -1) + "px", marginLeft: (marge * -1) + "px"}}>
                {children}
            </div>
            <div className="w-full sticky bottom-0">
                <input 
                    type="range" 
                    max={400} 
                    min={-700} 
                    value={marge} 
                    onChange={(e)=>setMarge(e.target.value)} 
                    className="range range-xs w-full " />
            
            </div>
        </div>
    )
}

export default ScalableArea