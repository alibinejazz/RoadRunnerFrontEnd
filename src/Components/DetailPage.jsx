import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const nav = useNavigate();

  useEffect(() => {
    fetchHotelData();
  });

  const fetchHotelData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/cars/get/${id}`);
      const data = await response.json();
      setItem(data);
    } catch (error) {
    }
  };

  function toBook(id) {
    nav(`/bookForm/${id}`);
  }

  return (
    <>
      <div data-testid="detailed"
        class="card"
        style={{
          maxWidth: "700px",
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "black",
          color: "white",
          padding: "25px",
          marginTop: "30px",
          marginLeft: "32%",
        }}
      >
        <img src={item.imagelink} class="card-img-top" alt="bigphoto" />
        <div class="card-body">
          <h5 class="card-title" style={{ fontSize: "50px" }}>
            {item.name}
          </h5>
          <p class="card-text">{item.longdescription}</p>
        </div>
        <li class="list-group-item" style={{ backgroundColor: "black" }}>
          {item.experience}
        </li>
        <li
          class="list-group-item"
          style={{
            backgroundColor: "black",
            color: "white",
            marginLeft: "16px",
          }}
        >
          Rs {item.price}
        </li>
        <div class="card-body">
          <button
            onClick={() => toBook(item.id)}
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Rent me Now
          </button>
        </div>
        <li class="list-group-item" style={{ marginLeft: "10px" }}>
          <a
            href="/"
            class="card-link"
            style={{ color: "red", marginLeft: "5px" }}
          >
            Back to Main Page
          </a>
        </li>
      </div>
    </>
  );
};

export default DetailPage;
