import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const CheckOut = () => {
    const service = useLoaderData();
    // console.log(service);
    const { _id, title, img, price } = service;
    const { user } = useContext(AuthContext);

    const handleOrder = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price = form.price.value;
        const booking = {
            customerName: name,
            email,
            date,
            price,
            img,
            service:title,
            service_id: _id
            
        }

        fetch('http://localhost:5000/bookings', {
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    'success',
                    'The booking Successfully!!',
                    'success'
                  )
            }
        })
        console.log(booking)
    }

    return (
        <div>
            <h1>car doctor:{title}</h1>
            <div className="card-body">
                <form onSubmit={handleOrder}>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-7'>
                        <div className="form-control">
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="date" name='date' placeholder="mm/dd/yyy" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="email" name='email' defaultValue={user?.email} placeholder="User Email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='price' defaultValue={'$' + price} className="input input-bordered" />
                        </div>
                        {/* <div className="form-control">
                            <input type="textarea" placeholder="Service Type" className="input input-bordered" />
                        </div> */}
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Order Confirm" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default CheckOut;