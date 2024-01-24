import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";




const BarraRicerca = ({ city, setCity, handleSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="navbar rounded-3 justify-content-center bg-light m-5"
      >

        <Form className="d-flex mx-3" onSubmit={handleSubmit}>
          <Form.Control
            type="text"
            placeholder="Inserisci il nome della città"
            value={city}
            onChange={handleInputChange}
            aria-label="Search"
            className="custom-input"
          />
          <Button type="submit" variant="outline-info mx-2 rounded-5">
            Search
          </Button>
        </Form>
      </Navbar>
    </>
  );
};

export default BarraRicerca;