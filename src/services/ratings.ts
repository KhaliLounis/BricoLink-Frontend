import api from "@/lib/api";

export const addRating = async ({
  content,
  offer_id,
  rating_number,
}: {
  content: string;
  offer_id: string;
  rating_number: number;
}) => {
  const response = await api.post("/rating", {
    content,
    offer_id,
    rating_number,
  });
  return response.data;
};
