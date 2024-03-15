import React, { useEffect } from 'react'
import Card from '../Components/Cards/Card'
import { oddData } from '../assets/Data'
import { useNavigate } from 'react-router-dom'
const Odd = () => {
    const navigate = useNavigate(); 
    const data = oddData
    const stateData = localStorage.getItem('state');
    console.log(stateData);
    useEffect(()=>{
      if(stateData == 'even'){
        navigate('/even');
      }
    },[0])

  return (
    <>
      <section className='semster'>
      <div className='topSem' > <h1>ODD SEMESTER</h1></div>
        <div className="divCard">
          {data.map((e, index) => {
            return <Card data={e} key={index} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Odd
