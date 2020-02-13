import React from "react";
import "./styles.css";

import Image from "./Image";
import withGrayScale from "./withGrayScale";

const ImageWithGrayScale = withGrayScale(Image, 1);

export default function App() {
  return (
    <div className="App">
      <ImageWithGrayScale src="https://picsum.photos/200/300" />
    </div>
  );
}
