import { useState } from "react";



export default function Membershipform () {
    const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for joining our email club!`);
  }

  return (
    <div className="center">
    <form onSubmit={handleSubmit}>
      <label>Enter your email:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
    </div>
  )
}