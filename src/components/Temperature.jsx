import React from 'react'
import { useState, useEffect } from 'react'
import './temperature.css'

function Temperature() {

    const [ degree, setDegree ] = useState(0);
    const [ convertedF, setConvertedF ] = useState();

    const [ far, setfar ] = useState(0);
    const [ convertedD, setConvertedD ] = useState();

    const setValD = (e)=>{
        // e.preventDefault();
        setDegree(e.target.value);
    }

    useEffect(()=>{
        const getF = () =>{
            const fahrenheit = (degree * 9 / 5) + 32;
            setConvertedF(fahrenheit);
        }
        getF();
    }, [degree])

    const setValF = (e)=>{
        // e.preventDefault();
        setfar(e.target.value);
    }

    useEffect(()=>{
        const getD = () =>{
            const deg = ((far - 32) * 5/9).toFixed(2);
            setConvertedD(deg);
        }
        getD();
    }, [far])
    

  return (
    <div className='main'>
        <h3>Temperature Convertor</h3>
      <div className='degree'>
        <label htmlFor='degree'> Degree to Farhenheit </label>
        <input
                type="text"
                value={degree}
                onChange={(setValD)}
                name="degree"
                id="title"
              />
        {/* <button onClick={}> Convert </button> */}
        
            <div> Conversion: {convertedF} </div> 
        
      </div>
      <div className='farh'>
      <label htmlFor='degree'> Farhenheit to Degree </label>
        <input
                type="text"
                value={far}
                onChange={(setValF)}
                name="degree"
                id="title"
              />
        {/* <button onClick={}> Convert </button> */}
        
        <div> Conversion: {convertedD} </div> 
        
      </div>

    </div>
  )
}

export default Temperature
