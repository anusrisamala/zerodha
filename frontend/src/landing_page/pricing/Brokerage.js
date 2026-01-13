// import React from "react";
// function Brokerage() {
//   return (
//     <div className="container">
//         <h2 >Charges for account opening</h2>
//       <div className="row border mt-4">
//         <div className="col-6">
//           <h4>Type of account</h4>
//         </div>
//         <div className="col-6">
//           <h4 className="text-center">Charges</h4>
//         </div>
//       </div>
//       <div className="row border">
//         <div className="col-6">
//           <p className="mt-3">Online account</p>
//           <p>Offline account</p>
//           <p>NRI account (offline only)</p>
//           <p>Partnership, LLP, HUF, or Corporate accounts (offline only)</p>
//         </div>

//         <div className="col-6 " style={{ textAlign: "center" }}>
          
//           <p
//             className="badge bg-success mt-4"
//             style={{
//               fontSize: "12px",
//               padding: "4px 10px",
//               fontWeight: "500",
//             }}
//           >
//             Free
//           </p>
//           <br></br>
//           <p
//             className="badge bg-success "
//             style={{
//               fontSize: "12px",
//               padding: "4px 10px",
//               fontWeight: "500",
//             }}
//           >
//             Free
//           </p>

//           <p>₹ 500</p>
//           <p>₹ 500</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Brokerage;
import React from "react";

function Brokerage() {
  return (
    <div className="container">

      {/* Charges for account opening */}
      <h2>Charges for account opening</h2>

      <div className="row border mt-4">
        <div className="col-6">
          <h4>Type of account</h4>
        </div>
        <div className="col-6">
          <h4 className="text-center">Charges</h4>
        </div>
      </div>

      <div className="row border">
        <div className="col-6">
          <p className="mt-3">Online account</p>
          <p>Offline account</p>
          <p>NRI account (offline only)</p>
          <p>Partnership, LLP, HUF, or Corporate accounts (offline only)</p>
        </div>

        <div className="col-6 text-center">
          <p
            className="badge bg-success mt-4"
            style={{ fontSize: "12px", padding: "4px 10px", fontWeight: "500" }}
          >
            Free
          </p>
          <br />
          <p
            className="badge bg-success"
            style={{ fontSize: "12px", padding: "4px 10px", fontWeight: "500" }}
          >
            Free
          </p>
          <p>₹ 500</p>
          <p>₹ 500</p>
        </div>
      </div>

      {/* Demat AMC */}
      <h2 className="mt-5">Demat AMC (Annual Maintenance Charge)</h2>

      <div className="row border mt-4">
        <div className="col-6">
          <h4>Value of holdings</h4>
        </div>
        <div className="col-6">
          <h4 className="text-center">AMC</h4>
        </div>
      </div>

      <div className="row border">
        <div className="col-6">
          <p className="mt-3">Up to ₹4 lakh</p>
          <p>₹4 lakh – ₹10 lakh</p>
          <p>Above ₹10 lakh</p>
        </div>

        <div className="col-6 text-center">
          <p
            className="badge bg-success mt-4"
            style={{ fontSize: "12px", padding: "4px 10px", fontWeight: "500" }}
          >
            Free
          </p>
          <p>₹ 100 per year (charged quarterly)</p>
          <p>₹ 300 per year (charged quarterly)</p>
        </div>
      </div>

      {/* Optional value added services */}
      <h2 className="mt-5">Charges for optional value added services</h2>

      <div className="row border mt-4">
        <div className="col-4">
          <h4>Service</h4>
        </div>
        <div className="col-4">
          <h4>Billing Frequency</h4>
        </div>
        <div className="col-4">
          <h4>Charges</h4>
        </div>
      </div>

      <div className="row border">
        <div className="col-4">
          <p className="mt-3">Tickertape</p>
          <p>Smallcase</p>
          <p>Kite Connect</p>
        </div>

        <div className="col-4">
          <p className="mt-3">Monthly / Annual</p>
          <p>Per transaction</p>
          <p>Monthly</p>
        </div>

        <div className="col-4">
          <p className="mt-3">Free: 0 | Pro: ₹249 / ₹2399</p>
          <p>Buy & Invest More: ₹100 | SIP: ₹10</p>
          <p>Connect: ₹500 | Personal: Free</p>
        </div>
      </div>

    </div>
  );
}

export default Brokerage;
