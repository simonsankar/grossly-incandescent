# Hello Im a redux post

The hype following the [link](http://google.com) last React conference has diminished. The proposal for React Hooks was introduced as part of the React alpha release. Since React v16.8, React Hooks have been in all official release as well. How does this improvement affect how we build our apps with GraphQL? We usually take our time before introducing new tech features in our projects at Atheros. This will allow us to not jump on the false hypes. React Hooks are now tested and production-ready, so we took a shot on implementing it in our projects as well. React Hooks is a new way how to reduce the need for React component classes and their life-cycle methods. They also solve other problems related to using HOC (Higher-order component) or render props pattern. There are a lot of resources on React Hooks and I will not go deep into them from React standpoint in this article. You can check out the following talk from the recent conference

```jsx
import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import PrismJS from "prismjs";
import PrismJsx from "prismjs/components/prism-jsx.min";

import reduxMD from "../md/redux.md";

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
