import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryLevel2sAsync } from "../../redux/categories/categoriesSlice";
import Categories3 from "./categories3";

let filtered = [];
function Category2({ mainCategoryId }) {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories2);

  useEffect(() => {
    dispatch(getCategoryLevel2sAsync());
  }, [dispatch]);

  filtered = categories;
  if (mainCategoryId !== 0) {
    filtered = categories.filter(
      (item) => item.categoryLevel1.id === mainCategoryId
    );
  }
  return (
    <div className={styles.dcontent}>
      <div className="row">
        {filtered.map((item) => (
          <div key={item.id} className="col text-center">
            <h3 className="text-capitalize">{item.categoryName}</h3>
            <Categories3 mainCategoryId={item.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category2;