import React from "react";
import image from "./assets/graphQL_schema.drawio.png";
export default function GraphQLSchemaModal() {
  return (
    <>
      <button
        type="button"
        className="btn btn-success m-2"
        data-bs-toggle="modal"
        data-bs-target="#schema"
      >
        ⚙️ View GraphQL schema
      </button>

      <div
        className="modal fade"
        id="schema"
        tabindex="-1"
        aria-labelledby="schemaLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ "max-width": "80%" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="schemaLabel">
                ⚙️ GraphQL schema
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <img src={image} alt="GraphQL schema" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
