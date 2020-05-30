import React from "react";
import { Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBone } from "@fortawesome/free-solid-svg-icons";

const NoMatch = () => {
  return (
    <div className="no-match">
      <div className="no-match__header">
        <h1 className="no-match__header__title">404!</h1>
        <h1 className="no-match__header__subtitle">
          How about a homeward bone?
        </h1>
        <Button type="primary" href="/" size="large">
          <FontAwesomeIcon icon={faBone} />
        </Button>
      </div>
    </div>
  );
};

export default NoMatch;
