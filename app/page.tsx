export default function Home() {
  const names = {
    name: "Ahmad",
    lastname: "Bahram",
  };

  console.log("The names are: ", names);
  console.log(names);

  return (
    <div className="min-h-screen bg-background-dark text-white">
      <div>Hello</div>
    </div>
  );
}
