import logo from "./assets/logo.png";
import { GrDeploy } from "react-icons/gr";
import { MdOutlineSchema } from "react-icons/md";
import DeploymentArchitectureModal from "./DeploymentArchitectureModal";
import GraphQLSchemaModal from "./GraphQLSchemaModal";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div>Project Management</div>
          </div>
        </a>
        <div>
          <DeploymentArchitectureModal />
          <GraphQLSchemaModal />
        </div>
      </div>
    </nav>
  );
}
