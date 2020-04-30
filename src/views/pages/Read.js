import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../state/posts/actions";
import ReactMarkdown from "react-markdown";
// PrismJS
import PrismJS from "prismjs";
// Languages
import "prismjs/components/prism-jsx.min";
// Plugins
import "prismjs/plugins/toolbar/prism-toolbar.min.js";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/show-language/prism-show-language.min.js";
import "prismjs/plugins/highlight-keywords/prism-highlight-keywords.min.js";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js";
import "prismjs/plugins/inline-color/prism-inline-color.min.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

import testMd from "./test.md";

const Read = () => {
  const location = useLocation();
  const { posts } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch md file
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
        "loading post"
      ) : posts.selected ? (
        <ReactMarkdown source={posts.selected.text} escapeHtml={false} />
      ) : (
        "NOTHING..."
      )}
    </div>
  );
};

export default Read;
