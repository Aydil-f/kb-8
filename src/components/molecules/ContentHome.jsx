import React from "react";

function ContentHome () {
    return (
  <div className="flex justify-center items-center min-h-screen bg-base-10 gap-10">
  {/* Card Kiri */}
  <div className="card bg-base-40 w-96 shadow-sm">
    <figure className="px-10 pt-10">
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
        className="rounded-xl"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Left Nike</h2>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div className="card-actions">
        <button className="btn btn-primary">Buy</button>
      </div>
    </div>
  </div>
  
{/* Card Tengah */}
 <div className="flex justify-center items-center min-h-screen bg-base-10 gap-10">
  <div className="card bg-base-40 w-96 shadow-sm">
    <figure className="px-10 pt-10">
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
        className="rounded-xl"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Nike</h2>
      <p>
        A card component has a figure, a body part, and inside body there are title and actions parts
      </p>
      <div className="card-actions">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>


  {/* Card Kanan */}
  <div className="card bg-base-40 w-96 shadow-sm">
    <figure className="px-10 pt-10">
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
        className="rounded-xl"
      />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Right Nike</h2>
      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
      <div className="card-actions">
        <button className="btn btn-primary">Buy</button>
      </div>
    </div>
  </div>
</div>

</div>


    );
};

export default ContentHome;