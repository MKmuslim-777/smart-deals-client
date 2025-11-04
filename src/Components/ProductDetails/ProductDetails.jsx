import React, { use, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { _id } = useLoaderData();
  const [bids, setBids] = useState([]);
  const { user } = use(AuthContext);
  const bidModalRef = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/bids/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("bids this products", data);
        setBids(data);
      });
  }, [_id]);

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };

  const handleBidSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const bid = form.bid.value;

    console.log({ _id, name, email, bid });
    const newBid = {
      product: _id,
      buyer_name: name,
      buyer_email: email,
      bid_price: bid,
      buyer_image: user?.photoURL,
      status: "pending",
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          bidModalRef.current.close();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your bid has been saved",
            showConfirmButton: true,
            timer: 2000,
          });
          // add the new bid to the state
          newBid._id = data.insertedId;
          const newBids = [...bids, newBid];
          newBids.sort((a, b) => b.bid_price - a.bid_price)
          setBids(newBids);
        }
      });
  };

  // console.log(product);
  return (
    <div>
      <button onClick={handleBidModalOpen} className="btn btn-primary">
        I want buy this product
      </button>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Give Seller Your Offered Price</h3>

          <form onSubmit={handleBidSubmit} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              readOnly
              defaultValue={user?.displayName}
            />
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              readOnly
              defaultValue={user?.email}
            />

            <label className="label">Bid</label>
            <input
              type="number"
              name="bid"
              className="input"
              placeholder="Your Bid"
            />

            <button className="btn btn-neutral mt-4">Place Your Bid</button>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>

      <div>
        <h3 className="text-3xl">
          Bids for this Product:{" "}
          <span className="text-primary">{bids.length}</span>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>SL No.</th>
                  <th>Buyer Name</th>
                  <th>Buyer Email</th>
                  <th>Bid Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {bids.map((bid, index) => (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{bid.buyer_name}</div>
                          <div className="text-sm opacity-50">
                           
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{bid.buyer_email}</td>
                    <td>{bid.bid_price}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
                ))}
                {/* row 2 */}
              </tbody>
            </table>
          </div>
        </h3>
      </div>
    </div>
  );
};

export default ProductDetails;
