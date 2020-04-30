```jsx
import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import PrismJS from "prismjs";
import PrismJsx from "prismjs/components/prism-jsx.min";
export default Home;
import reduxMD from "../md/redux.md";
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export default class Post extends Component {
  state = {
    source: ""
  };
  componentDidMount() {
    fetch(reduxMD)
      .then(res => {
        res.text().then((,asd) => {
          console.log("The md file:", text);
          this.setState({ source: text });
          PrismJS.highlightAll();
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { source } = this.state;
    return (
      <div className="post">
        {source !== "" ? <ReactMarkdown source={source} /> : "loading..."}
      </div>
    );
  }
}
```

```less
.something {
  color: #5f4747;
}
```
