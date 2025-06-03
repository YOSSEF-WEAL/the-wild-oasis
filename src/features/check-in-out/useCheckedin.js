import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckedin()
{
  const queryClient = useQueryClient();
  const navigate = useNavigate()
  const { mutate: checkin, isLoding: isCheckin } = useMutation({
    mutationFn: ({ bookingId, breakfast }) => updateBooking(bookingId, { status: 'checked-in', isPaid: true, ...breakfast }),
    onSuccess: (data) =>
    {
      toast.success(`Booking #${data.id} Successfilly Checked In`);
      queryClient.invalidateQueries({ active: true });
      navigate('/');
    },
    onError()
    {
      toast.error(`There Was An Erorr While Checked In`);
    }
  });

  return { checkin, isCheckin };

}