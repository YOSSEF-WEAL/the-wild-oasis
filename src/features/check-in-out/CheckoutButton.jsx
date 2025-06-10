import Button from "../../ui/Button";
import { useCheckedOut } from "./useCheckedOut.js";

function CheckoutButton({ bookingId }) {
  const { checkOut, isCheckOut } = useCheckedOut();

  return (
    <Button
      variations="primary"
      sizes="small"
      onClick={() => checkOut(bookingId)}
      disabled={isCheckOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
