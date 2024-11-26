import type { Signal } from "@preact/signals";

interface MenuItemProps {
  selected: Signal<string>;
  name: string;
}

export function MenuItem(props: MenuItemProps) {
  return (
    <li
      class="relative"
      onClick={() => props.selected.value = props.name}
    >
      <a
        class={`block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full
                      ${
          props.selected.value === props.name
            ? "font-semibold text-sky-500 before:bg-sky-500"
            : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
        }`}
        href="#"
      >
        {props.name}
      </a>
    </li>
  );
}
