import MyCalendar from "./Calandar";

const days = [
  {
    label: "Sunday",
    value: "sun",
    colorCode: "#FF09D1",
  },
  {
    label: "MOnday",
    value: "mon",
    colorCode: "#FF09D1",
  },
  {
    label: "Tuesday",
    value: "tus",
    colorCode: "#FF09D1",
  },
  {
    label: "wednesday",
    value: "wed",
    colorCode: "#FF09D1",
  },
  {
    label: "Thursday",
    value: "thu",
    colorCode: "#FF09D1",
  },
  {
    label: "Friday",
    value: "fri",
    colorCode: "#FF09D1",
  },
  {
    label: "Saturday",
    value: "fri",
    colorCode: "#FF09D1",
  },
];

const generateData = () => {
  const data = [];
  for (let i = 1; i <= 30; i++) {
    data.push(i);
  }
  return data;
};

const weekData = generateData();

function FullTaskGrid() {
  return (
    <>
      <div className="flex justify-between ml-8 ">
        <div>
          <div className="grid grid-cols-7 gap-2">
            {days.map((day) => (
              <div
                className={`w-[160px]`}
                style={{ background: day.colorCode }}
              >
                {day.label}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {weekData.map((item) => (
              <div key={item} className="size-40">
                {item}
              </div>
            ))}
          </div>
        </div>
        <MyCalendar />
      </div>
    </>
  );
}

export default FullTaskGrid;
