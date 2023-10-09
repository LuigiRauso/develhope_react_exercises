import Colors from "./componenets/Colors";

function App() {
  const rgbColors = [
    { id: 1, name: "red" },
    { id: 2, name: "green" },
    { id: 3, name: "blue" },
  ];

  return (
    <>
      <Colors items={rgbColors} />
    </>
  );
}

export default App;
