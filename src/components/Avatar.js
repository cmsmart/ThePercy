import React from "react";

function Avatar(props) {
  return (
        <div className="avatar">
          <img
            src={`http://percy.cholenasmart.com/sites/default/files/${
              props.src
            }`}
            alt="Avatar"
            aria-label="Musher avatar"
            style={{ width: "200" }}
          />
        </div>
  );
}

export default Avatar;
