import React from "react";

export default function DeploymentArchitectureModal() {
  return (
    <>
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#deploy"
      >
        🚀 View Deployment Architecture
      </button>

      <div
        className="modal fade"
        id="deploy"
        tabIndex="-1"
        aria-labelledby="deployLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" style={{ "max-width": "80%" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="deployLabel">
                🚀 Deployment Architecture
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">body</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
