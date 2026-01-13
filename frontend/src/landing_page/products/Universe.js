import React from "react";
function Universe() {
  return (
    <div className="container mt-5 p-3">
      <div className="row text-center">
        <h1 className="mt-4 fs-3">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 ">
          <img src="media/images/smallcaseLogo.png"  style={{width:"40%"}} />
          <p className="text-small text-muted mt-4">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media\images\streakLogo.png" style={{width:"40%"}} />
          <p className="text-small text-muted mt-3">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media\images\sensibullLogo.svg"  style={{width:"45%"}} />
          <p className="text-small text-muted mt-4">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
         <div className="col-4 p-3 mt-5">
          <img src="media\images\zerodhaFundhouse.png"  style={{width:"40%"}} />
          <p className="text-small text-muted mt-4">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media\images\goldenpiLogo.png"  style={{width:"40%"}} />
          <p className="text-small text-muted mt-4">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <div className="col-4 p-3 mt-5 ">
          <img src="media\images\dittoLogo.png"  style={{width:"30%"}} />
          <p className="text-small text-muted mt-4">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
        <div className="text-center mt-5">
                <button className="btn btn-primary text-center p-2" style={{width:"15%"}}>SignUp for free</button>
        </div>
        
      </div>
    </div>
  );
}

export default Universe;
