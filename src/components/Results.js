import React from "react";
import { Field } from "./Field";
import { filterResults} from '../utils/filterResults';

export const Results = props => {
  return (
    <div className="field">
      <h2>Results</h2>
      <div className="myCards">
      {!!props.data &&
         (
           <Field
            data={filterResults(props.data, props.year, props.race, props.searchQuery)}
          />
        )
      }
      </div>
    </div>
  );
};
