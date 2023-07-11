import React from "react";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";

const Committee = () => {
  return <Layout title={"Committee-SOMES"}>This is committee
    <Link  to="tel:+977-9811202751"  >Fone</Link>
    <br />
    <Link  to="mailto:subashwp2@gmail.com"  >email</Link>
  </Layout>;
};

export default Committee;

