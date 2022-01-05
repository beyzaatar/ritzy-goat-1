import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { Button } from "@chakra-ui/react";
import CategoryServices from "../../services/CategoryServices";
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
  const { isLogin } = useAuth();
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    let categoryService = new CategoryServices();
    categoryService
      .getCategoriesLevel1()
      .then((result) => setcategories(result.data.data));
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo"></div>

        <ul className={styles.menu}>
          {categories.map((category) => (
            <li key={category.id}>
              <Link to={`/categories/${category.categoryName}`}>
                {category.categoryName}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/products">all Products</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        {!isLogin && (
          <>
            <Link to="/signin">
              <Button colorScheme="teal" size="xs">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button colorScheme="teal" size="xs">
                Sign Up
              </Button>
            </Link>
          </>
        )}

        {isLogin && (
          <>
            <Link to="/profile">
              <Button colorScheme="teal" size="xs">
                Profile
              </Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
