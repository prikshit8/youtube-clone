import Button from "./Button";

const names = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "Soccer",
  "News",
  "Cooking",
  "Frontend",
  "React",
  "UI",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {names.map((name) => (
        <Button key={name} name={name} />
      ))}
    </div>
  );
};
export default ButtonList;
