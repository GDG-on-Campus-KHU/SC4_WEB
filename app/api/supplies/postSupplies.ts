import AxiosInstance from "..";

export default async function postSupplies(body: {
  [key in keyof SuppliesType]: boolean;
}) {
  const url = "/v1/supplies";

  const response = await AxiosInstance.post(url, { supplies: body });

  return response.data;
}
