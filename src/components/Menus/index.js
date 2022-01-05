import React, { useEffect } from "react";
import {
  getCategoryLevel1sAsync,
  changeHoverCategory1,
} from "../../redux/categories/categoriesSlice";
import { changeCurrenCategory1 } from "../../redux/products/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "./styles.module.css";
import Category2 from "./category2";
import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Menus() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.categories.categories1);
  const currentCategory = useSelector(
    (state) => state.categories.currentCategory1
  );

  useEffect(() => {
    dispatch(getCategoryLevel1sAsync());
  }, [dispatch]);

  //console.log(currentCategory)
  return (
    <Flex align="center" className="justify-content-center">
      <div className={styles.navbar}>
        <div className={styles.dropdown}>
          {categories.map((cat1) => (
            <Link to="/products" key={cat1.id}>
              <button
                item={cat1}
                className={styles.dropbtn}
                onClick={() => dispatch(changeCurrenCategory1(cat1.id))}
                onMouseOver={() => dispatch(changeHoverCategory1(cat1.id))}
              >
                {cat1.categoryName.toUpperCase()}
              </button>
            </Link>
          ))}
          <Category2 mainCategoryId={currentCategory} />
        </div>
      </div>
    </Flex>
  );
}

export default Menus;
