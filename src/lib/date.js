import { format } from "date-fns";

export default function formatDate(date, formatStr = "MMM d, yyyy") {
  return format(new Date(date), formatStr);
}
