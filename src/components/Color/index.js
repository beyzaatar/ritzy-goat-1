import React from "react";
import { getColorsAsync } from "../../redux/filters/filtersSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Color() {
  const colors = useSelector((state) => state.filters.colors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getColorsAsync());
  }, [dispatch]);
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-link dropdown-toggle text-black text-decoration-none"
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Color
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          {colors.map((color) => (
            <li key={color.id} className="dropdown-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              {color.colorName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Color;
