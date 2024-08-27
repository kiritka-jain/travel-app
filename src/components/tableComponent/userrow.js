const UserRow = (props) => {
  const { id, name, loginId, password, roleId } = props;


  return (
    <>
      <td>{id}</td>
      <td>{name}</td>
      <td>{loginId}</td>
      <td>{password}</td>
      <td>{roleId} </td>
    </>
  );
};
export default UserRow;
