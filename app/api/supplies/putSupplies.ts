import AxiosInstance from "..";

export default async function putSupplies(body: SuppliesType) {
  const url = "/supplies";

  const response = await AxiosInstance.put(url, { body: { supplies: body } });

  return response.data;
}
