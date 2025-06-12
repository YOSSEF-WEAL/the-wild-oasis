import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckedOut() {
  const queryClient = useQueryClient();

  const { mutate: checkOut, isPending: isCheckOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, { status: "checked-out" }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} Successfilly Checked Out`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      queryClient.invalidateQueries({ queryKey: ["stays"] });
    },
    onError() {
      toast.error(`There Was An Erorr While Checked Out`);
    },
  });

  return { checkOut, isCheckOut };
}
