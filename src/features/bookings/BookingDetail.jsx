import styled from "styled-components";

import BookingDataBox from "./BookingDataBox";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../ui/Spinner";
import { HiArrowDownOnSquare, HiArrowUp } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useCheckedOut } from "../check-in-out/useCheckedOut";

const HeadingGroup = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function BookingDetail() {
  const { isLoading, booking } = useBooking();
  const moveBack = useMoveBack();
  const navigate = useNavigate();
  const { checkOut, isCheckOut } = useCheckedOut();

  if (isLoading) return <Spinner />;
  if (!booking) return <p>Booking not found</p>;

  const { status, id: bookingId } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <HeadingGroup>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>
      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}
        {status === "checked-in" && (
          <Button
            icon={<HiArrowUp />}
            onClick={() => checkOut(bookingId)}
            disabled={isCheckOut}
          >
            Check out
          </Button>
        )}
        <Button variations="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
