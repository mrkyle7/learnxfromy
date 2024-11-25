import type { Signal } from "@preact/signals";
interface MenuProps {
  selected: Signal<string>;
}

export default function Menu(props: MenuProps) {
  return (
    <nav class="text-base lg:text-sm">
            <ul role="list" class="space-y-9">
              <li class="relative">
                <h2 class="font-display font-medium text-slate-900 dark:text-white">
                  Fundamentals
                </h2>
                <ul
                  role="list"
                  class="mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800"
                >
                  <li class="relative" onClick={() => props.selected.value="immutable"}>
                    <a
                      class={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full
                      ${props.selected.value==="immutable" ? "font-semibold text-sky-500 before:bg-sky-500" : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"}`}
                      href="#"
                    >
                      Immutable variables
                    </a>
                  </li>
                  <li class="relative" onClick={() => props.selected.value="mutable"}>
                    <a
                      class={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full
                        ${props.selected.value==="mutable" ? "font-semibold text-sky-500 before:bg-sky-500" : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"}`}
                      href="#"
                    >
                      Mutable variables
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
  );
}
