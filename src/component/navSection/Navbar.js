import React, { useContext, useEffect, useState } from "react";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import UserProfile from "./UserProfile";
import styles from "./navbar.module.css";
import { ShopContext } from "../../App";

const Navbar = () => {
  const [state] = useContext(ShopContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartLength, setCartLength] = useState(0);
  const [wishlistLength, setWishlistLength] = useState(0);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setCartLength(state.cart.length);
    setWishlistLength(state.wishlist.length);
  }, [state]);

  return (
    <div className={styles.navbar}>
      <h3 className={styles.logo}>ShopVibe</h3>
      <div className={styles.menuIcon}>
        <GiHamburgerMenu onClick={handleMenu} />
      </div>
      <nav className={isMenuOpen ? styles.menuOpen : styles.menuClose}>
        <ul className={styles.leftNavList}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            About
          </NavLink>
        </ul>
        <div className={styles.rightNavList}>
          <div>
            {wishlistLength > 0 && (
              <p className={styles.wishlistLength}>{wishlistLength}</p>
            )}
            <NavLink
              to="/wishlist"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <BsFillBookmarkHeartFill className={styles.wishlist} />
            </NavLink>
          </div>
          <div>
            {cartLength > 0 && <p className={styles.cartLength}>{cartLength}</p>}
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              <BsCartCheckFill className={styles.cart} />
            </NavLink>
          </div>
          <UserProfile className={styles.userLog} />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
