import { createRoute } from "honox/factory";
import Link from "../components/ui/Link";

export default createRoute((c) => {
  return c.render(
    <div class={"container mx-auto p-4 w-3/5"}>
      <Link href="/">
        <h1 class={"font-bold md:text-base"}>
          andromeda.computer
        </h1>
        <fieldset class={"block-container"}>
        <legend class={"font-bold text-base"}>Test Container</legend>
        <p class={"font-reg text-base"}>Elementum eu facilisis sed odio. Et egestas quis ipsum suspendisse ultrices. Porta nibh venenatis cras sed felis. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. Turpis massa tincidunt dui ut ornare lectus sit amet. Nulla fermentum odio eu. At tellus at urna condimentum mattis pellentesque id. Pellentesque diam volutpat commodo sed egestas. Est ante in nibh mauris cursus mattis</p>
        </fieldset>
      </Link>
    </div>,
    { title: "Andromeda Computer" }
  );
});
