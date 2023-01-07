import { DELETE_PROJECT } from "./../mutations/projectMutations";
import { useMutation } from "@apollo/client";
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import {EditProjectForm} from "./EditProjectForm";

export default function DeleteProjectButton({ projectId }) {
  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
  });
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteProject();
    navigate("/");
  };

  return (
    <div className="d-flex mt-5">
      <button className="btn btn-danger" onClick={handleDelete}>
        <FaTrash className="icon" />
        Delete Project
      </button>

    </div>
  );
}
