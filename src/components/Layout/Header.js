import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from '../Layout/HeaderCartButton'

const Header = ({onShowCart}) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Burger APP</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes.mainImage}>
        <img
          src="https://static.diabetesfoodhub.org/system/thumbs/system/images/articles/by-the-plate-main-image_SFW_3368519878.jpg"
          alt="Table with Food"
        />
      </div>
    </Fragment>
  );
};

export default Header;
