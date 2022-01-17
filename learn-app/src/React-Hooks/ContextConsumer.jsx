import React, { useContext } from "react";
import { AppContext } from "./Context";

const style = {
  display: "flex",
  flexDirection: "row",
};

const divStyle = {
  // padding:"5px",
  width: "10px",
  height: "10px",
  border: "solid 1px black",
  margin: "10px",
  borderRadius: "5px",
};

function ColorSelector({color,bgColor=color}) {
  const theme = useContext(AppContext);
  // console.log(color);
  return (
    <>
      <div
        style={{ ...divStyle, backgroundColor: bgColor }}
        onClick={() => theme.setColor(color)}
      ></div>
    </>
  );
}

function Consumer(props) {
  const theme = useContext(AppContext);
  // console.log(theme.appTheme)
  
  return (
    <div>
      <button onClick={theme.setDark}>DARK</button>
      <button onClick={theme.setLight}>LIGHT</button>
      <div style={style}>
        <ColorSelector color="red" />
        <ColorSelector color="green" />
        <ColorSelector color="yellow" />
        <ColorSelector color="blue" />
        <ColorSelector color="red" />
        <ColorSelector color="pink" bgColor="#ff00ae" />
        <ColorSelector color="skyblue" bgColor="#00ff95" />
      </div>
      <div style={theme.appTheme}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus
          mi orci, non aliquet ex efficitur gravida. Donec rhoncus felis est, a
          pulvinar est lacinia quis. Aenean quam ante, lacinia ut suscipit at,
          commodo id justo. Pellentesque sit amet est turpis. Mauris eros
          sapien, interdum pharetra semper eu, sodales sit amet purus. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse
          platea dictumst. Donec consequat scelerisque sodales. Mauris in felis
          ut felis pretium euismod non vitae lorem. Aenean porta nulla libero,
          in fermentum velit finibus a. Vivamus ante lorem, blandit faucibus
          velit sed, imperdiet maximus enim. Donec finibus velit lorem, nec
          vulputate lorem efficitur et. Aliquam volutpat feugiat felis, vitae
          aliquet orci mollis non. Integer ultricies metus eu lacus blandit, ac
          interdum libero pretium. Suspendisse nec tortor magna. Morbi
          consectetur lectus eget neque malesuada, id malesuada metus
          sollicitudin. Sed id orci eu nisi pellentesque posuere et quis enim.
        </p>
      </div>
    </div>
  );
}

export default Consumer;
