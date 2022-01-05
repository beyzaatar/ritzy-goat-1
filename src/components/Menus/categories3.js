import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryLevel3sAsync } from "../../redux/categories/categoriesSlice";
//import styles from "./styles.module.css";

let filtered = [];
function Categories3({ mainCategoryId }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories3);

  useEffect(() => {
    dispatch(getCategoryLevel3sAsync());
  }, [dispatch]);

  filtered = categories;
  if (mainCategoryId !== 0) {
    filtered = categories.filter(
      (item) => item.categoryLevel2.id === mainCategoryId
    );
  }

  return (
    <div >
      {filtered.map((item) => (
        <a className="me-5 ms-5" key={item.id} href="/">
          {item.categoryName}
        </a>
      ))}
    </div>
  );
}

export default Categories3;
