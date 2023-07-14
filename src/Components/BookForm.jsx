import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookForm = () => {
  const [name, setName] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [address, setAddress] = useState("");
  const [cellNum, setCellNum] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [rentPerDay, setRentPerDay] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPriceWithDamage, setTotalPriceWithDamage] = useState(0);
  const [damageWavier, setDamageWavier] = useState(0);
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState({});
  const { id } = useParams();

  const nav = useNavigate();

  useEffect(() => {
    if (pickupDate && returnDate) {
      const daysCount =
        Math.floor(
          (new Date(returnDate) - new Date(pickupDate)) / (1000 * 3600 * 24)
        ) + 1;
      if (new Date(returnDate) < new Date(pickupDate)) {
        setTotalPrice(0);
      } else {
        fetch(`http://localhost:8080/cars/get/${id}`)
          .then((response) => response.json())
          .then((data) => {
            const pricePerDay = data.price;
            setRentPerDay(pricePerDay);
            const calculatedPrice = pricePerDay * daysCount;
            const damageprice = daysCount * 15000;
            setTotalPrice(calculatedPrice);
            setDamageWavier(damageprice);
            const totalpricewhole = calculatedPrice + damageprice;
            setTotalPriceWithDamage(totalpricewhole);
          })
          .catch((error) => {
            console.error("Error fetching price:", error);
                  });
      }
    } else {
      fetch(`http://localhost:8080/cars/get/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
        });

      let retainedData = localStorage.getItem("myobj");
      if (retainedData?.length > 0) {
        retainedData = JSON.parse(retainedData);
        setName(retainedData?.name);
        setCellNum(retainedData?.cellnumber);
        setAddress(retainedData?.address);
        setLicenseNumber(retainedData?.driverLicenseNumber);
        setPickupDate(retainedData?.pickupDate);
        setReturnDate(retainedData?.returnDate);
      }
    }
  }, [returnDate, pickupDate, id]);

  function handleSubmit(e) {
    e.preventDefault();

    if (new Date(returnDate) < new Date(pickupDate)) {
      alert("Please select correct dates");
      return;
    }

    if (!checked) {
      const formData = {
        name: name,
        cellnumber: cellNum,
        address: address,
        pickupDate: new Date(pickupDate),
        returnDate: new Date(returnDate),
        driverLicenseNumber: licenseNumber,
        totalPrice: totalPrice,
        carId: id,
      };

      fetch("http://localhost:8081/drivers/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    } else {
      const formData = {
        name: name,
        cellnumber: cellNum,
        address: address,
        pickupDate: new Date(pickupDate),
        returnDate: new Date(returnDate),
        driverLicenseNumber: licenseNumber,
        totalPrice: totalPriceWithDamage,
        carId: id,
      };

      fetch("http://localhost:8081/drivers/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
        });

      const formdata = {
        name: name,
        cellnumber: cellNum,
        address: address,
        pickupDate: new Date(pickupDate),
        returnDate: new Date(returnDate),
        driverLicenseNumber: licenseNumber,
        carId: 6,
        totalPrice: damageWavier,
      };

      fetch("http://localhost:8081/drivers/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      })
        .then((response) => response.json())
        .then((data) => {
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    }
    localStorage.clear();
    nav("/thanks");
  }

  const handleChooseAnotherCar = (e) => {
    e.preventDefault();
    const myobj = {
      name: name,
      cellnumber: cellNum,
      address: address,
      driverLicenseNumber: licenseNumber,
      pickupDate: pickupDate,
      returnDate: returnDate,
    };

    localStorage.setItem("myobj", JSON.stringify(myobj));
    nav("/");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ color: "white" }}>
          <span data-testid="carselected" style={{ color: "red" }}>Car Selected:</span> {data.name}
        </h1>
        <img src={data.imagelink} alt="info" style={{ width: "400px" }} />
      </div>
      <form
        data-testid="form-book"
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          marginLeft: "25%",
          marginTop: "30px",
          backgroundColor: "black",
          padding: "20px",
          borderRadius: "50px",
        }}
      >
        <div class="mb-3">
          <div
            style={{
              display: "flex",
              color: "white",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            Rental Form
          </div>
          <label
            for="exampleInputEmail1"
            class="form-label"
            style={{ color: "white", fontWeight: "1000" }}
          >
            Name
          </label>
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div class="mb-3">
          <label
            for="exampleInputPassword1"
            class="form-label"
            style={{ color: "white", fontWeight: "1000" }}
          >
            Cell Number
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
            value={cellNum}
            onChange={(e) => setCellNum(e.target.value)}
            required
          />
        </div>
        <div class="mb-3">
          <label
            for="exampleInputPassword1"
            class="form-label"
            style={{ color: "white", fontWeight: "1000" }}
          >
            Address
          </label>
          <input
            type="address"
            class="form-control"
            id="exampleInputPassword1"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div class="mb-3">
          <label
            for="exampleInputPassword1"
            class="form-label"
            style={{ color: "white", fontWeight: "1000" }}
          >
            Driver's License Number
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            value={licenseNumber}
            onChange={(e) => setLicenseNumber(e.target.value)}
            required
          />
        </div>
        <div class="mb-3">
          <label
            for="exampleInputPassword1"
            class="form-label"
            style={{ color: "white", fontWeight: "1000" }}
          >
            Pickup Date
          </label>
          <input
            type="datetime-local"
            class="form-control"
            id="exampleInputPassword1"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            required
          />
        </div>
        <div class="mb-3">
          <label
            for="exampleInputPassword1"
            class="form-label"
            style={{ color: "white", fontWeight: "1000" }}
          >
            Return Date
          </label>
          <input
            type="datetime-local"
            class="form-control"
            id="exampleInputPassword1"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            required
          />
        </div>
        <div class="mb-3">
          <label
            for="exampleInputPassword1"
            class="form-label"
            style={{ color: "white", fontWeight: "1000" }}
          >
            Price(Per Day)
          </label>
          <input
            class="form-control"
            id="exampleInputPassword1"
            value={rentPerDay}
            readOnly
          />
        </div>
        <div class="mb-3">
          <label
            for="exampleInputPassword1"
            class="form-label"
            style={{ color: "white", fontWeight: "1000" }}
          >
            Total Price
          </label>
          <input
            class="form-control"
            id="exampleInputPassword1"
            value={totalPrice}
            readOnly
          />
        </div>
        <div>
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label
            class="form-check-label"
            for="flexCheckDefault"
            style={{ color: "white", fontWeight: "1000", marginLeft: "10px" }}
          >
            Wanna include damage wavier ?
          </label>
        </div>

        <div class="mb-3">
          <input
            class="form-control"
            id="exampleInputPassword1"
            value={damageWavier}
            readOnly
          />
        </div>

        <label
          class="form-check-label"
          for="flexCheckDefault"
          style={{ color: "white", fontWeight: "1000", marginLeft: "10px" }}
        >
          Total Price(Including Damage)
        </label>
        {checked && (
          <div class="mb-3">
            <input
              class="form-control"
              id="exampleInputPassword1"
              value={totalPriceWithDamage}
              readOnly
            />
          </div>
        )}
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button
            data-testid="checkout"
            onClick={handleSubmit}
            class="btn btn-primary"
            style={{ backgroundColor: "darkblue", border: "2px solid black" }}
          >
            Checkout
          </button>
          <button
            data-testid="anothercar"
            class="btn btn-primary"
            style={{ backgroundColor: "darkblue", border: "2px solid black" }}
            onClick={handleChooseAnotherCar}
          >
            Choose Another Car
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
