import React from "react";
import { getGendersAsync } from "../../redux/filters/filtersSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function Gender() {
  const genders = useSelector((state) => state.filters.genders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGendersAsync());
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
          Gender
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          {genders.map((gender) => (
            <li className="dropdown-item" key={gender.id}>
              <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                aria-label="..."
              />
              {gender.genderName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Gender;
