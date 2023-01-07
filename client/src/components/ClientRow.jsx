import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutations";
import { GET_CLIENTS } from "../queries/clientsQueries";
import { GET_PROJECTS } from "./../queries/projectQueries";

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    update(cache, { data: { deleteClient } }) {
      // Read the cache for the clients we want
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      const { projects } = cache.readQuery({ query: GET_PROJECTS });
      // Filter the deleted client projects out of the projects
      cache.writeQuery({
        query: GET_PROJECTS,
        data: {
          projects: projects.filter((currentProject) => {
            console.log(currentProject, deleteClient.id);
            return currentProject.client.id !== deleteClient.id;
          }),
        },
      });
      // Filter the deleted client out of the page
      cache.writeQuery({
        query: GET_CLIENTS,
        data: {
          clients: clients.filter(
            (currentClient) => currentClient.id !== deleteClient.id
          ),
        },
      });
    },
    //   refetchQueries: [{ query: GET_CLIENTS }],
    variables: {
      id: client.id,
    },
  });

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button onClick={deleteClient} className="btn btn-danger btn-sm">
          Delete
        </button>
      </td>
    </tr>
  );
}
