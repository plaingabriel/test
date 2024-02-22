import { useState } from "preact/hooks";

const greets = ["Hallo", "Habari", "Hola"];
const randomIndex = () => Math.floor(Math.random() * greets.length);

export function Greet() {
  const [greeting, setGreeting] = useState(greets[randomIndex()]);

  const handleClick = () => {
    setGreeting(greets[randomIndex()]);
  };

  return (
    <article class="flex flex-col items-center gap-y-5">
      <h3>{greeting}! Thank you for visiting</h3>
      <button
        class="bg-primary text-background p-3 border rounded hover:bg-accent"
        onClick={handleClick}
      >
        New Greeting
      </button>
    </article>
  );
}
