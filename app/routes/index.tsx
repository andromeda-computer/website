import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(
    <div class={"container mx-auto p-4"}>
      <h1 class={"font-bold md:text-3xl sm:text-2xl text-xl text-center"}>
        andromeda.computer
      </h1>
    </div>,
    { title: "Andromeda Computer" }
  );
});
