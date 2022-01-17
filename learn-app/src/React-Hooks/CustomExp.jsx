import React,{useState} from 'react';


function Custom() {
  const [color, setColor] = useState("black")
  // console.log(color)

  return (
    <>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="black"></option>
        <option value="red">red</option>
        <option value="green">green</option>
        <option value="yellow">yellow</option>
        <option value="blue">blue</option>
        <option value="#0dffd3">skyblue</option>
        <option value="#ff590d">orange</option>
      </select>
      <div style={{ color: color }}>
        What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.{" "}
      </div>
    </>
  );
}

export default  Custom