import React from "react";
import { getDesignersAsync } from "../../redux/filters/filtersSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Designer() {
  const designers = useSelector((state) => state.filters.designers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDesignersAsync());
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
          Designer
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          {designers.map((designer) => (
            <li className="dropdown-item">
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              {designer.designerName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Designer;
