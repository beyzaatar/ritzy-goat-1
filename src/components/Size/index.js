import React from "react";
import { getSizesAsync } from "../../redux/filters/filtersSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Size() {
  const sizes = useSelector((state) => state.filters.sizes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSizesAsync());
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
          Size
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          {sizes.map((size) => (
            <li className="dropdown-item" key={size.id}>
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              {size.sizeName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Size;
