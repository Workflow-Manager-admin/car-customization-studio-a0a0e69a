import React from "react";
import "./Car3DViewer.css";

// PUBLIC_INTERFACE
/**
 * Car3DViewer renders a placeholder for the 3D car model.
 * Replace the content of this component with an actual Three.js or 3D library viewer in the future.
 */
function Car3DViewer({ color, componentsConfig }) {
  return (
    <div className="car-3d-viewer">
      <div className="car-3d-viewer__placeholder" style={{ borderColor: color }}>
        <span className="car-3d-viewer__icon" role="img" aria-label="Car">
          🚗
        </span>
        <div className="car-3d-viewer__label">3D Car Model Viewer Placeholder</div>
        <div className="car-3d-viewer__note">
          {/* Display selected options as a summary */}
          <div>
            <strong>Color:</strong> <span style={{ color }}>{color}</span>
          </div>
          <div>
            <strong>Components:</strong>{" "}
            {Object.keys(componentsConfig).length === 0
              ? "None"
              : Object.entries(componentsConfig)
                  .map(([k, v]) => `${k}: ${v}`)
                  .join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Car3DViewer;
