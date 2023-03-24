import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function DateForm({ birthDate, setBirthDate }) {
  return (
    <>
      <Form 
        onSubmit={(e) => {
          e.preventDefault();
          if (birthDate === "") {
            alert("Please enter a date");
          } else {
            setBirthDate(e.target.value);
          }
        }}
      >
        <Form.Group className="dateForm">  
        <Form.Label>✨✨✨</Form.Label>        
          <Form.Control
            className="text-center pickDate"
            type="date"
            value={birthDate}
            onChange={(e) => {
              setBirthDate(e.target.value);
            }}
          />
          <Form.Text className="uDatePicker">Enter the birthdate</Form.Text>
          <Button variant="secondary">Submit</Button>
        </Form.Group>
      </Form>      
    </>
  );
}
