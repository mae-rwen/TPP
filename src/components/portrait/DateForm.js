import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function DateForm({
  birthDate,
  setBirthDate,
  dateSubmitted,
  setDateSubmitted,
  handleGoToPortrait,
}) {
  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (birthDate === "") {
            alert("Please enter full date");
          } else {
            if (dateSubmitted) {
              setDateSubmitted(false);
              setBirthDate("");
            } else {
              setDateSubmitted(true);
            }
          }
        }}
      >
        <Form.Group className="dateForm">
          <Form.Label>✨✨✨</Form.Label>
          {dateSubmitted ? (
            <Form.Control
              className="text-center pickDate"
              type="date"
              value={birthDate}
              disabled
            />
          ) : (
            <Form.Control
              className="text-center pickDate"
              type="date"
              value={birthDate}
              onChange={(e) => {
                setBirthDate(e.target.value);
              }}
            />
          )}

          <Form.Text className="uDatePicker">Enter the birthdate</Form.Text>
          <Form.Group className="dateFormBtns">
            {dateSubmitted ? (
              <>
                <Button variant="danger" onClick={handleGoToPortrait}>
                  Portrait
                </Button>
                <Button variant="secondary" type="submit">
                  Reset
                </Button>
              </>
            ) : (
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            )}
          </Form.Group>
        </Form.Group>
      </Form>
    </>
  );
}
