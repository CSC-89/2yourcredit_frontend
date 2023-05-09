
import React, {useEffect, useState} from "react";


const useCalc = (r, n) => {

    const [output, setOutput] = useState(0)

    useEffect(() => {
        const rPlus = r + 1

        const math = (r * Math.pow(rPlus, n)) / (Math.pow(rPlus, n) - 1)

        setOutput(math)
    },[r, n])
    
  return output
}

export default useCalc