// import React from "react";
// function RightSectoin({
//   imageURL,
//   productName,
//   productDescription,
//   learnMore,
// }) {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-6 p-5 mt-5">
//           <h1>{productName}</h1>
//           <p>{productDescription}</p>
//           <div>
//             <a href={learnMore}>
//               Learn More{" "}
//               <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
//             </a>
//           </div>
//         </div>
//         <div className="col-6">
//           <img src={imageURL} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RightSectoin;
import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Text */}
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>
              Learn More{" "}
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="col-6 p-5">
          <img src={imageURL} alt={productName} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
//https://chatgpt.com/c/693eedb3-64a8-8322-92fd-5432eb965b64
