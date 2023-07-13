import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Cars.module.css';
import DetailPage from './DetailPage';

const Cars = () => {
    const [cars, setCars] = useState([]);

    const nav = useNavigate();

    useEffect(()=> {
        fetch("https://mocki.io/v1/60fb3ccd-a4f2-4eb6-967e-eebd7a14a4c6")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setCars(data)
      })
    }, [])

    function toForm(id){
        nav(`/bookForm/${id}`);
    }


  return (
    <div className={styles.background}> 
      {cars.map((x) => (
        <div key={x.id} className="card mb-2" style={{ maxWidth: "60%", border:"2px solid white", backgroundColor:"black", color:"white" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={x.imagelink} className="img-fluid rounded-start" alt={x.name} style={{width:"400px", height:"222px", border:"2px black solid"}}/>
            </div>
            <div className="col-md-6"  style={{marginRight:"100px"}}>
              <div className="card-body">
                
                <h5 className="card-title"><Link to={`/detailPage/${x.id}`}>{x.name}</Link></h5>
                <p>{x.shortdescription}</p>
                <p className="card-text">{x.price}</p>
                
                <button onClick={()=> toForm(x.id)}>Book it</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cars