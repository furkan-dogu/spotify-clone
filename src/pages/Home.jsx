import Section from "components/Section";
import {items} from "../helpers/homeItems"

const Home = () => {

  return (
    <div className="grid gap-y-8">
      <Section title="Recently played" more="/..." items={items} />
      <Section title="Show to try" more="/..." items={items} />
      <Section title="Made For Furkan Doğu" more="/..." items={items} />
    </div>
  );
};

export default Home;
