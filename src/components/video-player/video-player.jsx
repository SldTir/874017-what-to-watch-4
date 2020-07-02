import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {imagePath, preview} = this.props;
    return (
      <video src={preview} poster={imagePath} autoPlay width="280" height="175" muted />
    );
  }
}
