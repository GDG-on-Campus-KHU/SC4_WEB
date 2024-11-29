import { ItemPositionType, item_positions } from "~/ui/Canvas";

import AxiosInstance from "..";

export default async function postPredictSupplies(imgUrl: string) {
  const url = "/predict";

  const response = await AxiosInstance.post<{
    status: string[];
    recognized_items: typeof suppliesList;
    missing_items: string[];
  }>(url, {
    file: imgUrl,
  });
  const suppliesString = sessionStorage.getItem("supplies");
  const localSupplies = suppliesString ? JSON.parse(suppliesString) : [];

  const updatedList = item_positions.map((item) => {
    const localSupply = localSupplies.find((supply: ItemPositionType) =>
      response.data.recognized_items.includes(supply.name)
    );
    const existsFromLocal = localSupply ? localSupply.exists : false;

    return {
      ...item,
      exists: existsFromLocal,
    };
  });

  sessionStorage.setItem("supplies", JSON.stringify(updatedList));

  return updatedList;
}
