# Hello Im a redux post

The hype following the [link](http://google.com) last React conference has diminished. The proposal for React Hooks was introduced as part of the React alpha release. Since React v16.8, React Hooks have been in all official release as well. How does this improvement affect how we build our apps with GraphQL? We usually take our time before introducing new tech features in our projects at Atheros. This will allow us to not jump on the false hypes. React Hooks are now tested and production-ready, so we took a shot on implementing it in our projects as well. React Hooks is a new way how to reduce the need for React component classes and their life-cycle methods. They also solve other problems related to using HOC (Higher-order component) or render props pattern. There are a lot of resources on React Hooks and I will not go deep into them from React standpoint in this article. You can check out the following talk from the recent conference

```js
import React from "react";
import { Row, Col } from "antd";
const Home = () => {
  return (
    <div className="home">
      <Row className="home__splash">
        <Col span={10}></Col>
        <Col span={14}>
          <div className="home__header">Simon Sankar</div>
        </Col>
      </Row>
      <Row>Secondary</Row>
    </div>
  );
};

export default Home;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```
