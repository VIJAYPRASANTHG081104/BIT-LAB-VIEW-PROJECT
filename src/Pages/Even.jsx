import React from 'react'
import { EvenData } from '../assets/Data';
import Card from '../Components/Cards/Card';
const Even = () => {
  const data = EvenData
  return (
    <>
      <section className='semster'>
      <div className='topSem'> <h1>EVEN SEMESTER</h1></div>
        <div className="divCard">
          {data.map((e, index) => {
            return <Card data={e} key={index} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Even