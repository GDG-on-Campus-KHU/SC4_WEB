import AxiosInstance from "..";

export default async function getUserSupplies() {
  const url = "/user";

  const response = await AxiosInstance.get<{
    username: string;
    supplies: SuppliesType;
  }>(url);

  return response.data;
}
