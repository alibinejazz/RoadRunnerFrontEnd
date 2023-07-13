import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const BookForm = () => {
    const[name, setName] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [address, setAddress] = useState('');
    const [cellNum, setCellNum] = useState('');
    const [rentPerDay, setRentPerDay] = useState(0);
    const [totalPriceWithWavier, setTotalPriceWithWavier] = useState(0);
    const nav = useNavigate();


    function toMain(){
        nav('/');
    }

  return (
    <div>
      <form style={{width:"50%", display:"flex", flexDirection:"column", marginLeft:"25%", marginTop:"10px"}}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e)=> setName(e.target.value)} required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Cell Number</label>
    <input type="email" class="form-control" id="exampleInputPassword1" value={cellNum} onChange={(e)=> setCellNum(e.target.value)} required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Address</label>
    <input type="address" class="form-control" id="exampleInputPassword1" value={address} onChange={(e)=> setAddress(e.target.value)} required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Arrivate Date</label>
    <input type="date" class="form-control" id="exampleInputPassword1" value={pickupDate} onChange={(e)=> setPickupDate(e.target.value)}required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Departure Date</label>
    <input type="date" class="form-control" id="exampleInputPassword1" value={returnDate} onChange={(e)=> setReturnDate(e.target.value)} required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price(Per Day)</label>
    <input class="form-control" id="exampleInputPassword1" value={rentPerDay}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Total Price(With Damage Wavier)</label>
    <input class="form-control" id="exampleInputPassword1" value={totalPriceWithWavier}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <button class="btn btn-primary" style={{marginLeft: "10px"}} onClick={toMain}>Cancel</button>
</form>
    </div>
  )
}

export default BookForm