import { ItemPositionType, item_positions } from "~/ui/Canvas";

import axios from "axios";

export default async function postPredictSupplies(data: FormData) {
  const url = "https://tmp.junstudy.com/predict";

  const response = await axios.post<{
    status: string[];
    recognized_items: typeof suppliesList;
    missing_items: string[];
  }>(url, data);

  const suppliesString = sessionStorage.getItem("supplies");
  const localSupplies =
    suppliesString && suppliesString.length !== 0
      ? (JSON.parse(suppliesString) as ItemPositionType[])
      : item_positions;

  const updatedSupplies = localSupplies.map((item) => {
    console.log(item, 1);
    if (response.data.recognized_items.includes(item.name)) {
      console.log(item, 2);
      return { ...item, exists: true };
    }
    return item;
  });
  sessionStorage.setItem("supplies", JSON.stringify(updatedSupplies));

  return updatedSupplies;
}
