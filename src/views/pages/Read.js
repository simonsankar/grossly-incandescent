import React, { useEffect } from "react";
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

const Read = () => {
  const location = useLocation();
  const { posts } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const { pathname } = location;
    const postUrl = pathname.replace("/read/", "");
    getPost(dispatch, postUrl);

    PrismJS.highlightAll();
  }, [dispatch, location]);

  return (
    <div className="post">
      {/* {source !== "" ? <ReactMarkdown source={source} /> : "loading..."} */}
    </div>
  );
};

export default Read;
