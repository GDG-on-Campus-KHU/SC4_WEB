import AxiosInstance from "..";

export default async function getUserSupplies() {
  const url = "/v1/user";

  const response = await AxiosInstance.get<{
    username: string;
    supplies: SuppliesType;
  }>(url);

  return response.data;
}
