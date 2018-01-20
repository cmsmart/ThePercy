import React from "react";

const getImageAddress = musher => {
  const imageAddress = musher.uri.split("//");
  const image = imageAddress[1];
  return image;
};

const Avatar = (props) => {
  const address = getImageAddress(props.src)
  return <div className="avatar">
      <img src={`http://percy.cholenasmart.com/sites/default/files/styles/mushers/public/${address}`} alt="Avatar" aria-label="Musher avatar" style={{ width: "200" }} />
    </div>;
}

export default Avatar;

