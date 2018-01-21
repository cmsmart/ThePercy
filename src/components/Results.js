import React from "react";
import { Field } from "./Field";

export const Results = props => {
  return (
    <div className="field">
      <div className="myCards">
      {!!props.data &&
         (
           <Field
            data={props.data}
          />
        )
      }
      </div>
    </div>
  );
};
