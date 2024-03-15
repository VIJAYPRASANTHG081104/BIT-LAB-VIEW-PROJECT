import React from "react";
import { Link, useParams } from "react-router-dom";
import { oddData } from "../../assets/Data";
import { useDispatch } from "react-redux";
import { changeDept } from "../../Redux/Slice";
const OddDept = () => {
  const { id } = useParams();
  const data = oddData.find((item) => item.id.toString() === id);
  const dispatch = useDispatch();
  const update = (e) =>{
    dispatch(changeDept(e));
  }
  if (!data) {
    return <div>Data not found</div>;
  }

  return (
    <div data-aos="zoom-in-up">
    <div className='topSem'> <h1>DEPARTMENTS</h1></div>
      <div className="divCard">
      {data.dept.map((e, index) => (
        <div className="cardMain"   key={index}>
        <div className="imgBack">
        <img className="img" src={e.img}/>
        </div>
            
          <p>{e.name}</p>
          <Link to={`/sheet/res`} onClick={() => update(e)}>
            <button className="btn btnMin"><i className="fa-solid fa-arrow-right"></i></button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default OddDept;
