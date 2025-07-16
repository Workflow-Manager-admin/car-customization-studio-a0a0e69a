import React from "react";
import "./Sidebar.css";

// PUBLIC_INTERFACE
/**
 * Sidebar for car options: color, components, etc.
 * @param {object} props
 * @param {string[]} props.colors - Available car colors
 * @param {string} props.selectedColor
 * @param {function} props.onColorSelect
 * @param {object[]} props.components - Customizable components [{ id, name, options: [...] }]
 * @param {object} props.selectedComponents - id -> selected option
 * @param {function} props.onComponentChange
 */
function Sidebar({
  colors,
  selectedColor,
  onColorSelect,
  components,
  selectedComponents,
  onComponentChange,
}) {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h2 className="sidebar-section-title">Exterior Color</h2>
        <div className="sidebar-colors">
          {colors.map((color) => (
            <button
              key={color}
              className={`sidebar-color-btn ${
                selectedColor === color ? "selected" : ""
              }`}
              style={{ backgroundColor: color, borderColor: selectedColor === color ? "var(--accent, #ea4335)" : "#ccc" }}
              onClick={() => onColorSelect(color)}
              aria-label={`Select ${color}`}
            />
          ))}
        </div>
      </div>

      <div className="sidebar-section">
        <h2 className="sidebar-section-title">Components</h2>
        {components.map((comp) => (
          <div key={comp.id} className="sidebar-component-config">
            <label className="sidebar-component-label">{comp.name}</label>
            <select
              value={selectedComponents[comp.id] || ""}
              onChange={(e) => onComponentChange(comp.id, e.target.value)}
              className="sidebar-component-dropdown"
            >
              <option value="">Select</option>
              {comp.options.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
