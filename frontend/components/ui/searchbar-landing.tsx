import { Button } from "./button";
import { Input } from "./input";

export default function SearchbarLanding() {
  return (
    <div>
      <Input type="text" placeholder="Search" />
      <Button>Search</Button>
    </div>
  );
}
