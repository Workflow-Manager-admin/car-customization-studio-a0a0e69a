import React from "react";
import "./CarPreview.css";

// PUBLIC_INTERFACE
/**
 * Shows a summary of selected car configuration: color, components, approx price, etc.
 */
function CarPreview({ color, componentsConfig, price }) {
  return (
    <section className="car-preview">
      <h2>Configuration Preview</h2>
      <div className="car-preview__color-row">
        <span className="car-preview__swatch" style={{ background: color }} />
        <span>
          <strong>Color: </strong>
          {color}
        </span>
      </div>
      <div className="car-preview__comps-list">
        <strong>Components:</strong>
        <ul>
          {Object.entries(componentsConfig).length === 0 ? (
            <li>None selected</li>
          ) : (
            Object.entries(componentsConfig).map(([k, v]) => (
              <li key={k}>{k}: {v}</li>
            ))
          )}
        </ul>
      </div>
      <div className="car-preview__price">
        <strong>Estimated Price:</strong>{" "}
        <span>${price.toLocaleString()}</span>
      </div>
    </section>
  );
}

export default CarPreview;
