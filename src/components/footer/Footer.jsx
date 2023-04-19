import React from "react";
import Card from "react-bootstrap/Card";

function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        height={"320px"}
        src="https://i.ibb.co/Fn981G6/pika.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <div
          style={{
            display: "flex",
            paddingTop: "100px",
            paddingRight: "300px",
            justifyContent: "flex-end",
          }}
        >
          <input type="text" placeholder="Leave comment" />
          <button
            style={{
              backgroundColor: "brown",
              color: "white",
              border: "none",
              width: "100px",
            }}
          >
            add
          </button>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;
