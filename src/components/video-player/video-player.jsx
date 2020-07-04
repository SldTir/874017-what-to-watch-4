import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      play: false,
    };
  }

  componentDidUpdate(prevProps) {
    const {play} = this.props;
    if (play !== prevProps.play) {
      this.setState({play: true});
    }
  }

  componentDidMount() {
    const {imagePath, preview} = this.props;
    const video = this._videoRef.current;

    video.src = preview;
    video.poster = imagePath;
    video.autoplay = true;
    video.muted = true;
    video.width = `280`;
    video.height = `175`;

    video.onplay = () => {
      this.setState({
        play: true,
      });
    };

    video.onended = () => {
      this.setState({
        play: false,
      });
    };

  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.onplay = null;
    video.onended = null;
  }

  render() {
    return (
      <video ref={this._videoRef} />
    );
  }
}

VideoPlayer.propTypes = {
  imagePath: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  play: PropTypes.bool.isRequired,
};
