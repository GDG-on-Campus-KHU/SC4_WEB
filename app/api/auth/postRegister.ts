import AxiosInstance from "..";

export type RegisterBodyType = {
  name: string;
  password: string;
};

export default async function postRegister(body: RegisterBodyType) {
  const url = "/register";

  const response = await AxiosInstance.post(url, body);

  return response.data;
}
