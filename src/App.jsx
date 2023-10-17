import Container from "./components/Container";

function App() {
  return (
    <>
      <Container title={"Welcome to Our Website!"}>
        <p className="text-lg text-gray-700">
          Make sure to login to use our services.
        </p>
      </Container>
    </>
  );
}

export default App;
