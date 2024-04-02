import { Breadcrumbs } from "@material-tailwind/react";
import Path from "../../assets/path.png";
export function BreadcrumbsCustomStyles() {
  return (
    <Breadcrumbs
      separator={<img src={Path} />}
      className="bg-bgBlue ml-8 mt-10"
    >
      <a href="#" className="text-blue ">
        Add Resources
      </a>
      <a href="#" className="text-blue font-semibold">
        Driver
      </a>
    </Breadcrumbs>
  );
}
