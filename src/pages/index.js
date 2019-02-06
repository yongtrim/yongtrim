import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`yongtrim`, `application`, `game`]} />
    <p>
      2013년에 시작한 (주)용트림이 <br />
      2019년 지금, 애플트리(ApplTree.io)로 새롭게 시작합니다.
    </p>
    <a href="https://appltree.io">애플트리 홈페이지로 이동</a>

    <a href="celebrush://">셀럽크러쉬</a>
  </Layout>
);

export default IndexPage;
