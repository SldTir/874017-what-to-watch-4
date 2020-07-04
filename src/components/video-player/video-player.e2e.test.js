import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import VideoPlayer from "./video-player.jsx";
import {getId} from "../../mocks/films.js";

const filmsInfo = [
  {
    src: `img/bohemian-rhapsody.jpg`,
    name: `Bohemian Rhapsody`,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    id: getId(),
  }
];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`VideoPlayerComponent`, () => {
  it(`CheckingThePlaybackStatus`, () => {
    const VideoPlayerElement = mount(
        <VideoPlayer
          preview={filmsInfo[0].preview}
          imagePath={filmsInfo[0].src}
          play={false}
        />
    );
    const activePlayerInstance = VideoPlayerElement.instance();
    activePlayerInstance.componentDidUpdate({play: false});
    expect(VideoPlayerElement.state(`play`)).toBe(false);
  });

  it(`CheckTheStatusOfPause`, () => {
    const VideoPlayerElement = mount(
        <VideoPlayer
          preview={filmsInfo[0].preview}
          imagePath={filmsInfo[0].src}
          play={true}
        />
    );
    const activePlayerInstance = VideoPlayerElement.instance();
    activePlayerInstance.componentDidUpdate({play: false});
    expect(VideoPlayerElement.state(`play`)).toBe(true);
  });
});
