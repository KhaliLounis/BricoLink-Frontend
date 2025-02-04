import api from "@/lib/api";

export const addOffer = async ({
  content,
  request_id,
}: {
  content: string;
  request_id: string;
}) => {
  const response = await api.post("/offer", { content, request_id });
  return response.data;
};

export const updateOfferStatus = async ({
  offer_id,
  offer_response_id,
  status,
}: {
  offer_id: string;
  offer_response_id: number;
  status: string;
}) => {
  const response = await api.put(`/offer/${offer_id}/status`, {
    offer_response_id,
    status,
  });
  return response.data;
};
