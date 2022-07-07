import './Showcase.css'
import Card from "./Card";
function Showcase() {
  return (
    <div className="h-screen bg-blue-800">
      <div className="cards-container">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default Showcase;
