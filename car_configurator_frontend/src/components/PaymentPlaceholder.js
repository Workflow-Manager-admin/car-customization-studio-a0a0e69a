import React from "react";
import "./PaymentPlaceholder.css";

// PUBLIC_INTERFACE
/**
 * Payment step placeholder, where payment gateway would be integrated.
 */
function PaymentPlaceholder({ price, onBack }) {
  return (
    <div className="payment-placeholder">
      <h2>Payment (Coming Soon)</h2>
      <div className="payment-placeholder__summary">
        <span>
          <strong>Total:</strong> ${price ? price.toLocaleString() : "0"}
        </span>
      </div>
      <div className="payment-placeholder__actions">
        <button onClick={onBack} className="payment-placeholder__back-btn">
          Back to Configurator
        </button>
        <button className="payment-placeholder__pay-btn" disabled>
          Pay Now (Placeholder)
        </button>
      </div>
      <p style={{marginTop: "1.4em", color: "#aa5c2c", fontSize: "0.97em"}}>
        Payment integration coming soon.
      </p>
    </div>
  );
}

export default PaymentPlaceholder;
