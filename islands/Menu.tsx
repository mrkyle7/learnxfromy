import type { Signal } from "@preact/signals";
import { MenuItem } from "../components/MenuItem.tsx";
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
            <MenuItem selected={props.selected} name="Immutable Variables" />
            <MenuItem selected={props.selected} name="Mutable Variables" />
          </ul>
        </li>
      </ul>
    </nav>
  );
}
