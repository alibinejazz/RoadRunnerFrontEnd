import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Cars.module.css";

const Cars = () => {
  const [cars, setCars] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/cars/getall")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCars(data);
      });
  }, []);

  function toForm(id) {
    nav(`/bookForm/${id}`);
  }

  return (
    <div className={styles.background}>
      {cars.map((x, index) => {
        if (x.id !== 6) {
          return (
            <div
              key={x.id}
              className="card mb-2"
              style={{
                maxWidth: "60%",
                border: "2px solid white",
                backgroundColor: "#000000",
                color: "white",
                marginLeft: "400px",
                height: "225px",
              }}
            >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={x.imagelink}
                    data-testid="carimage"
                    className="img-fluid rounded-start"
                    alt="imagecar"
                    style={{
                      width: "400px",
                      height: "222px",
                      border: "2px black solid",
                    }}
                  />
                </div>
                <div className="col-md-6" style={{ marginRight: "100px" }}>
                  <div className="card-body">
                    <h5 className="card-title">
                      <Link
                        to={`/detailPage/${x.id}`}
                        style={{ fontSize: "25px", fontWeight: "bold" }}
                      >
                        {x.name}
                      </Link>
                    </h5>
                    <p>{x.shortdescription}</p>
                    <p className="card-text">Rs {x.price}</p>

                    <button
                    data-testid="rentbutt"
                      className={styles.rentbutton}
                      onClick={() => toForm(x.id)}
                    >
                      Rent me Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Cars;
