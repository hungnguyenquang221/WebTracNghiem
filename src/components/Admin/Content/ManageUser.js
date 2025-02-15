import ModalCreateUser from "./ModalCreateUser";
import "./ManagerUser.scss";
const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div>
          <button> Add new user</button>
        </div>
        <div>table users</div>
      </div>
      <ModalCreateUser />
    </div>
  );
};

export default ManageUser;
