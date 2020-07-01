import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: true,
    };
  }

  render() {
    return (
      <div className="player">
        <video/>
      </div>
    );
  }
}
