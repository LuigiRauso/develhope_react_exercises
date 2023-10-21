import FilteredList from "./component/FilteredList";

const users = [
  { id: 1, name: "Emma Johnson", age: 22 },
  { id: 2, name: "Liam Smith", age: 17 },
  { id: 3, name: "Olivia Brown", age: 19 },
  { id: 4, name: "Noah Davis", age: 16 },
  { id: 5, name: "Ava Miller", age: 20 },
];

function App() {
  return (
    <>
      <FilteredList users={users} />
    </>
  );
}

export default App;
