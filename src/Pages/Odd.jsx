import React from 'react'
import Card from '../Components/Cards/Card'
import { oddData } from '../assets/Data'
const Odd = () => {
    const data = oddData
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
