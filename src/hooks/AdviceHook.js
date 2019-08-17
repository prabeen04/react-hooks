import { useState, useEffect } from "react";

export default function useAdvice() {
    const [advice, setAdvice] = useState(null);
    useEffect(() => {
        setTimeout(() =>{
            fetch(`http://api.adviceslip.com/advice`)
                .then(res => res.json())
                .then(res => {
                    setAdvice(res)
                    console.log(res)
                })
                .catch(err => console.log(err))
        }, 4000)
        return () => clearTimeout();
        })
    return advice || null
}