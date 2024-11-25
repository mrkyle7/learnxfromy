import { JSX } from "preact";


export function MenuSection(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      class="px-2 py-1 w-full border-b-2  bg-white hover:bg-gray-200 transition-colors"
    />
  );
}
