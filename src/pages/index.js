import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>용트림</h1>
    <p>(주)용트림이 애플트리(ApplTree.io)로 새롭게 단장합니다.</p>
    <a href="http://appltree.io">애플트리 홈페이지 이동</a>
  </Layout>
);

export default IndexPage;
