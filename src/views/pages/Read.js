import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../state/posts/actions";
import { Skeleton } from "antd";
import ReactMarkdown from "react-markdown";
// PrismJS
import PrismJS from "prismjs";
// Languages
import "prismjs/components/prism-bash";
import "prismjs/components/prism-c";
import "prismjs/components/prism-css";
import "prismjs/components/prism-dart";
import "prismjs/components/prism-docker";
import "prismjs/components/prism-git";
import "prismjs/components/prism-go";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-less";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-ocaml";
import "prismjs/components/prism-reason";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-sass";
import "prismjs/components/prism-yaml";
// Plugins
import "prismjs/plugins/toolbar/prism-toolbar.min.js";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/show-language/prism-show-language.min.js";
import "prismjs/plugins/highlight-keywords/prism-highlight-keywords.min.js";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js";
import "prismjs/plugins/inline-color/prism-inline-color.min.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

function flatten(text, child) {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

function HeadingRenderer(props) {
  var children = React.Children.toArray(props.children);
  var text = children.reduce(flatten, "");
  var slug = text.toLowerCase().replace(/\W/g, "-");
  return React.createElement("h" + props.level, { id: slug }, props.children);
}

const Read = () => {
  const location = useLocation();
  const { posts } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch md file
    console.log(location);
    const { pathname } = location;
    const postUrl = pathname.replace("/read/", "");
    getPost(dispatch, postUrl);
  }, [dispatch, location]);

  useEffect(() => {
    // Highlight the markdown when posts change
    PrismJS.highlightAll();
  }, [posts]);

  return (
    <div className="post">
      {posts.loading ? (
        <>
          <Skeleton loading={true} active paragraph />
          <Skeleton loading={true} active paragraph />
          <Skeleton loading={true} active paragraph />
        </>
      ) : posts.selected ? (
        <ReactMarkdown
          source={posts.selected.text}
          escapeHtml={false}
          renderers={{ heading: HeadingRenderer }}
        />
      ) : (
        "NOTHING..."
      )}
    </div>
  );
};

export default Read;
