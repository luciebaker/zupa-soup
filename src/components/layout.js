
import React from "react";
import PropTypes from "prop-types";
import "./bootstrap.min.css"
import "./sass/layout.scss";
const Layout = ({ children }) => <> {children} </>


Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;