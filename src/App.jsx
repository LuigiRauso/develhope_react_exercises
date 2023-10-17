import Container from "./components/Container";

function App() {
  return (
    <>
      <Container>
        <h1 className="mb-4 text-4xl font-bold text-blue-600">
          Welcome to Our Website!
        </h1>
        <p className="text-lg text-gray-700">
          Please ensure you log in to access our services.
        </p>
      </Container>
    </>
  );
}

export default App;
