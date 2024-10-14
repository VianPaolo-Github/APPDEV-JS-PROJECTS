import Form from 'react-bootstrap/Form';

const Pokedex = () => {
    return (
    <>
        <h1>Pokedex</h1>
        <Form.Control
            type="text"
            placeholder="Search"
            className=" mr-sm-2"
        />
    </>
    
    );
  };

export default Pokedex;