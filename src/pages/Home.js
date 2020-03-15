import React from "react";
import { Row, Col, PageHeader } from "antd";

const Home = () => {
  return (
    <div className="home">
      <Row className="home__splash">
        <Col xs={24} sm={12} md={10} lg={8}>
          Something
        </Col>
        <Col xs={24} sm={12} md={14} lg={16}>
          <PageHeader title="Title" subTitle="This is a subtitle" />
          <div className="home__header">Grossly Incandescent</div>
        </Col>
      </Row>
      <Row>Secondary</Row>
    </div>
  );
};

export default Home;
