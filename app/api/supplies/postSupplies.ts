import AxiosInstance from "..";

export default async function postSupplies(body: SuppliesType) {
  const url = "/supplies";

  const response = await AxiosInstance.post(url, { body: { supplies: body } });

  return response.data;
}
