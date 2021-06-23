import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const ContactCard = ({
  firstName = "",
  lastName = "",
  phoneNumber = "",
  profilePic = "",
  onRemove,
}) => {
  return (
    <Card
      className="shadow p-4"
      style={{ width: "60%", margin: "0 auto 1.8rem auto" }}
    >
      <Row>
        <Col
          md={4}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Image
              src={profilePic}
              alt={`Profile of ${firstName} ${lastName}.`}
              roundedCircle
              width="150"
            />
          </div>
          <div>
            <p>
              {firstName} {lastName}
            </p>
            <p>{phoneNumber}</p>
          </div>
        </Col>
        <Col
          md={3}
          className="px-4"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <BootButton onClick={onRemove}>X</BootButton>
        </Col>
      </Row>
    </Card>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BootButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 50%;
  border: none;
  background-color: lightgrey;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 900;
`;

export default ContactCard;
