import AxiosInstance from "..";

export type LoginBodyType = {
  name: string;
  password: string;
};

export default async function postLogin(body: LoginBodyType) {
  const url = "/login";

  const response = await AxiosInstance.post(url, body);

  const token = response.data.data.token;

  sessionStorage.setItem("token", token);

  return response.data;
}
