export default function PackList() {
  return (
    <div className="grid grid-cols-2 gap-y-[20px]">
      {suppliesList.map((item) => (
        <ListItem key={item.value} {...item} />
      ))}
    </div>
  );
}

type ListItemProps = ListItemType;

function ListItem({ label }: ListItemProps) {
  return (
    <div className="flex gap-[10px]">
      <input type="checkbox" />
      <label className="text-xl">{label}</label>
    </div>
  );
}

type ListItemType = { label: string; value: string; exists: boolean };

const suppliesList: ListItemType[] = [
  { label: "신분증", value: "ID_card", exists: false },
  { label: "백팩", value: "backpack", exists: false },
  { label: "담요", value: "blanket", exists: false },
  { label: "촛불", value: "candle", exists: false },
  { label: "사탕", value: "candy", exists: false },
  { label: "참치캔", value: "canned_tuna", exists: false },
  { label: "초콜릿 바", value: "chocolate_bar", exists: false },
  { label: "나침반", value: "compass", exists: false },
  { label: "구급상자", value: "first_aid_kit", exists: false },
  { label: "손전등", value: "flashlight", exists: false },
  { label: "핫팩", value: "heat_pack", exists: false },
  { label: "즉석 라면", value: "instant_noodles", exists: false },
  { label: "칼", value: "knife", exists: false },
  { label: "라이터", value: "lighter", exists: false },
  { label: "지도", value: "map", exists: false },
  { label: "마스크", value: "mask", exists: false },
  { label: "성냥", value: "matches", exists: false },
  { label: "라디오", value: "radio", exists: false },
  { label: "로프", value: "rope", exists: false },
  { label: "침낭", value: "sleeping_bag", exists: false },
  { label: "고체 연료", value: "solid_fuel", exists: false },
  { label: "보온 담요", value: "thermal_blanket", exists: false },
  { label: "티슈", value: "tissue", exists: false },
  { label: "세면도구", value: "toiletries", exists: false },
  { label: "수건", value: "towel", exists: false },
  { label: "우산", value: "umbrella", exists: false },
  { label: "물", value: "water", exists: false },
  { label: "정수 알약", value: "water_purification_tablets", exists: false },
  { label: "호루라기", value: "whistle", exists: false },
  { label: "지퍼백", value: "ziplock_bag", exists: false },
];
