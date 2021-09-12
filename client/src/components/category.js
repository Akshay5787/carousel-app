import Dropdown from "react-bootstrap/Dropdown";

const category={
        
}
const Category = () => {
  return (
    <div>
      <>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-button-dark-example1"
            variant="secondary"
          >
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item href="/" active>
              Action
            </Dropdown.Item>
            <Dropdown.Item href="/ducati">Ducati</Dropdown.Item>
            <Dropdown.Item href="/japan">Japan</Dropdown.Item>
            <Dropdown.Item href="/action-4">Separated link</Dropdown.Item>
            <Dropdown.Item href="/japan">Japan</Dropdown.Item>
            <Dropdown.Item href="/japan">Japan</Dropdown.Item>
            <Dropdown.Item href="/japan">Japan</Dropdown.Item>
            <Dropdown.Item href="/japan">Japan</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </>
    </div>
  );
};

export default Category;
