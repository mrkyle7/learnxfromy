import { useSignal } from "@preact/signals";
import Menu from "../islands/Menu.tsx";

export default function Home() {
  const selected = useSignal("immutable");
  return (
    <div class="h-dvh w-dvh p-0 m-0 overflow-hidden flex flex-col">
      <header class="bg-[#86efac] h-[250px] flex flex-col items-center justify-center pb-4">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="x from y logo"
        />
        <h1 class="text-4xl font-bold">
          Learn x from y
        </h1>
      </header>
      <main class="flex-1 flex overflow-y-auto flex-row">
        <aside class="p-2 px-4 min-w-[228px] bg-slate-100 h-full">
          <Menu selected={selected}></Menu>
        </aside>
        <div class="flex gap-1">
          <div>JavaScript<pre class="bg-slate-300">const x = 1;</pre></div>
          <div>TypeScript<pre class="bg-slate-300">const x = 1;</pre></div>
        </div>
      </main>
      <footer class="mx-auto h-[24px] text-center items-center w-full bg-[#86efac]">
        A footer
      </footer>
    </div>
  );
}
