type AboutItemType = {
  name: string;
  part: string;
};

const makers: AboutItemType[] = [
  {
    name: "이수진",
    part: "AI",
  },
  {
    name: "이준호",
    part: "백엔드",
  },
  {
    name: "김도영",
    part: "백엔드",
  },
  {
    name: "정아현",
    part: "프론트엔드",
  },
];

export default function PackAbout() {
  return (
    <ul className="flex flex-col gap-[30px]">
      {makers.map((maker, index) => (
        <AboutItem key={index} {...maker} />
      ))}
    </ul>
  );
}

function AboutItem({ name, part }: AboutItemType) {
  return (
    <li className="h-[100px] flex gap-[10px] items-center p-[30px] border rounded-[8px]">
      <div className="text-2xl">{part}</div>
      <div className="text-2xl">{name}</div>
    </li>
  );
}
