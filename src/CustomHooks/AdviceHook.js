import { useState, useEffect } from "react";

export default function getAdvice(url) {
    fetch(`http://api.adviceslip.com/advice`)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.log(err)
}