import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function ListAntrian() {
  return (
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button>01</Button> 
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Second group">
        <Button>02</Button> 
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Third group">
        <Button>03</Button> 
      </ButtonGroup>
      <ButtonGroup className="me-3" aria-label="fourth group">
        <Button>04</Button> 
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Five group">
        <Button>05</Button> 
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Six group">
        <Button>06</Button> 
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Seven group">
        <Button>07</Button> 
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Eight group">
        <Button>08</Button> 
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Nine group">
        <Button>09</Button> 
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Ten group">
        <Button>10</Button> 
      </ButtonGroup>

    </ButtonToolbar>
    
  );
}

export default ListAntrian;