import React from "react";
import paynow from "./img/paynow.png";

const Deposit = () => {

  return (
    <div id="details">
      <div className="content">
        <div id="details" className="details" style={{ marginBottom: "60px" }}>
          <p>
            To reserve your spot for the LEAD Innovation tour in Tokyo, which
            will be held from September 28-30th, 2023; you will need to transfer
            JPY 27,000 Yen. You will have a chance to cancel your participation
            until Wednesday, May 31, but will be responsible for any transfer
            fee or currency conversions.
          </p>
          <p>
            After this date, the deposit becomes non refundable. As a lesson
            learnt from previous LEAD innovation tour, we now offer multiple
            options to pay this deposit. Please choose the one which is more
            convenient for you.
          </p>
          <ul className="title">
            <li>Gold Bullion</li>
            <li>First Born kid (Must be potty trained)</li>
            <li>Retirement Savings bonds</li>
            <li>Fragments of exploded SpaceX (April 20th, 2023)</li>
          </ul>
          <p style={{ color: "red" }}>
            <span
              style={{
                fontWeight: "600",
                textDecoration: "underline",
                fontSize: "1.7rem",
              }}
            >
              Please note:
            </span>{" "}
            Lazy husbands or nagging wives not accepted as deposits. I know
            Stanford LEADers are creative, but We have to draw a line some
            where.
          </p>
          <span>
            You can make the deposit of JPY 27,000 for the innovation tour by clicking on the pay now button.
          </span>
          <br />
          <br />
          <h2 style={{ margin: "auto", display: "inline" }}>Payment Options</h2>
      
          <a target="_blank" rel="noreferrer" href="https://checkout.stripe.com/c/pay/cs_live_a1pevbqHSr7If8Jq7P4YRGroR6msL2pWKMtnlpmTDjLJJNCfYNIiduDC5v#fidkdWxOYHwnPyd1blppbHNgWjA0SH8zYm5Bd3cxQDBpUFVKQHVkSDY1VlxdfWJJZDFKV3RvRmN%2FX1E2b1REcjV%2Fbm1ASWRpY0Z9dn9tdEFkczY8Q0BRb05hV2NpPX9IMlxTPUhQUX9USjdPNTVcZFVKYE5RMCcpJ3VpbGtuQH11anZgYUxhJz8nY19gMW1%2FYzE9ZkdCPDJCNDExJ3gl">
            <img src={paynow} alt="time concious" width={250} height={200} />
          </a>
          <div style={{ marginTop: "30px" }}>
            <span
              style={{
                fontWeight: "600",
                textDecoration: "underline",
                fontSize: "1.7rem",
              }}
            >
              Note:
            </span>{" "}
            With option 1, you can choose any provide to transfer the money to
            Sachio or Chika.
            <br />
            <span style={{ marginLeft: "42px" }}>
              However, exact amount needs to be deposited irrespective of the
              option you choose.
            </span>
          </div>
          <div style={{ marginTop: "12px" }}>
            <span
              style={{
                fontWeight: "600",
                textDecoration: "underline",
                fontSize: "1.7rem",
              }}
            >
              Note:
            </span>{" "}
            you can withdraw from the tour till June 15th only and your deposit less transfer amount will be refunded. <br />No refunds can be made post June 15th.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deposit;
