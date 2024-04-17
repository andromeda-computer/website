import { createRoute } from "honox/factory";
import Link from "../components/ui/Link";

export default createRoute((c) => {
  return c.render(
    <div class={"container mx-auto p-4"}>
      <Link href="/">
        <h1 class={"font-bold md:text-3xl sm:text-2xl text-xl"}>
          andromeda.computer
        </h1>
      </Link>
    </div>,
    { title: "Andromeda Computer" }
  );
});
