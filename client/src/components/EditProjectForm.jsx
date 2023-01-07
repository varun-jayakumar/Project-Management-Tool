import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useMutation, useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import { GET_CLIENTS } from "../queries/clientsQueries";
import { UPDATE_PROJECT } from "../mutations/projectMutations";
import { useNavigate } from "react-router-dom";

export default function EditProjectForm({ projectInfo }) {
  const [name, setName] = useState(projectInfo.name);
  const [description, setDescription] = useState(projectInfo.description);
  const [status, setStatus] = useState(projectInfo.status);
  //get clients for dropdown
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_CLIENTS);
  const [updateProject] = useMutation(UPDATE_PROJECT, {
    update(cache, { data: { updateProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: {
          projects: projects.map((project) =>
            project.id === updateProject.id ? updateProject : project
          ),
        },
      });
    },
    variables: {
      id: projectInfo.id,
      name,
      description,
      status,
    },
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (name === "" || description === "" || status === "")
      return alert("All Fields are required");
    setDescription("");
    setName("");
    setStatus("new");
    updateProject();
    navigate("/");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-secondary mt-5"
        data-bs-toggle="modal"
        data-bs-target="#addProjectModal"
      >
        <div className="d-flex align-items-center">
          <FaEdit className="icon" />
          Edit Project
        </div>
      </button>

      <div
        className="modal fade"
        id="addProjectModal"
        tabIndex="-1"
        aria-labelledby="EditProjectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="EditProjectModalLabel">
                Update Project Form
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    id="status"
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="new">New</option>
                    <option value="progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                {/* <div className="mb-3">
                  <label className="form-label">Client ID</label>
                  <select
                    id="client"
                    className="form-select"
                    value={clientId}
                    onChange={(e) => setClientId(e.target.value)}
                  >
                    <option value="">Select Client</option>
                    {loading ? (
                      <option value="">Loading...</option>
                    ) : (
                      data.clients.map((client) => (
                        <option key={client.id} value={client.id}>
                          {client.name}
                        </option>
                      ))
                    )}
                  </select>
                </div>
                {error && (
                  <p className="text-danger">"error fetching clients</p>
                )} */}
                <button
                  type="submit"
                  data-bs-dismiss="modal"
                  className="btn btn-secondary"
                >
                  Update Client Fields
                </button>
              </form>
            </div>
            {/* <div className="modal-footer">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
