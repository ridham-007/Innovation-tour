import React from "react";
import photo2 from "./img/photo2.png";

export default function timeConscious() {
  return (
    <div id="details">
      <div className="content">
        <h3 style={{ display: "inline" }}>
          Welcome Time Conscious LEAD Alumni
        </h3>
        <div
          id="details"
          className="details"
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "30px",
          }}
        >
          <div style={{ width: "70%" }}>
            <p>
              As you have places to go and show off POWER that you learnt in
              LEAD course, we have partnered With Stripe to get you best rates
              to transfer Japanese Yen, Whether you are in Asia, Europe or In
              Americas. Please follow the steps below and transfer the Money to
              Chika Kimura, Your local Stanford LEADer.
            </p>
            <p>
              I am sure you want to know the person before transferring the
              money for the Innovation tour, so here are Some of the details
              about Chika
            </p>
            <ul className="title">
              <li>
                A global marketer with both international and local backbones.
              </li>
              <li>
                A curator who is deeply immersed with multiple Japanese cultures
                such as entertainment, foods, or activities in nature.
              </li>
              <li>
                With her extensive knowledge and pure passion toward Japanese
                culture, Chika can be your reliable conduit to provide one and
                only experiences that you will never forget.
              </li>
            </ul>
            <a target="_blank" rel="noreferrer" href="https://checkout.stripe.com/c/pay/cs_live_a1pevbqHSr7If8Jq7P4YRGroR6msL2pWKMtnlpmTDjLJJNCfYNIiduDC5v#fidkdWxOYHwnPyd1blppbHNgWjA0SH8zYm5Bd3cxQDBpUFVKQHVkSDY1VlxdfWJJZDFKV3RvRmN%2FX1E2b1REcjV%2Fbm1ASWRpY0Z9dn9tdEFkczY8Q0BRb05hV2NpPX9IMlxTPUhQUX9USjdPNTVcZFVKYE5RMCcpJ3VpbGtuQH11anZgYUxhJz8nY19gMW1%2FYzE9ZkdCPDJCNDExJ3gl">
              Deposit Amount
            </a>
          </div>
          <div style={{ width: "30%" }}>
            <img src={photo2} alt="step1" width="70%" height={400} />
            <div style={{ marginTop: "200px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
