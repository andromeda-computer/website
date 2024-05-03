import { createRoute } from "honox/factory";
import Link from "../components/ui/Link";

export default createRoute((c) => {
  return c.render(
    // <div
    <div class={""}>
      <img
        src="static/logo.svg"
        class={"absolute top-10 left-1/2 -translate-x-1/2"}
      />
      <img
        src="/static/andromeda.png"
        class={"absolute w-full h-full object-cover top-0 left-0 -z-10"}
      />
      <p
        class={
          "absolute top-24 left-1/2 -translate-x-1/2 tracking-widest text-center font-medium"
        }
      >
        DISTRIBUTED COMPUTE NETWORK
      </p>
      <p
        class={
          "absolute bottom-20 left-1/2 -translate-x-1/2 tracking-widest font-semibold"
        }
      >
        COMING SOON
      </p>
      <a
        href="mailto:admin@andromeda.computer"
        class={
          "absolute bottom-12 left-1/2 -translate-x-1/2 tracking-widest text-[#ffffffbf] font-light"
        }
      >
        admin@andromeda.computer
      </a>
    </div>
  );

  // return c.render(
  //   <div class={"container mx-auto p-4 w-3/5 max-w-screen-md"}>
  //     <Link href="/">
  //       <h1 class={"font-bold"}>andromeda.computer</h1>
  //     </Link>
  //     <fieldset class={"block-container"}>
  //       <legend class={"font-bold p-2"}>compute - by people, for people</legend>
  //       <p class={"font-reg px-2"}>
  //         a network built by the people, for the people. probably a bunch of
  //         nonsense here about what this means? getting down to business. call to
  //         action. specifically trying to recruit people with knowledge to help.
  //         decentralized inference. but ideally actually more broad than just
  //         inference. api's are easy to use. can provide services. a lot more
  //         thinking needs to be done to clarify this. why this way. who it is
  //         meant for. the target audience. maybe the why is not important. just
  //         what it is. if you are interested. how to contribute.
  //       </p>
  //     </fieldset>
  //   </div>,
  //   { title: "Andromeda Computer" }
  // );
});
