/* eslint-disable @typescript-eslint/no-empty-object-type */

import { ComponentProps } from "react";

interface PrefixProps extends ComponentProps<"div"> {}

export function Prefix(props: PrefixProps) {
  return <div {...props} />;
}

interface ControlProps extends ComponentProps<"input"> {}

export function Control(props: ControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder:text-zinc-600"
      {...props}
    />
  );
}

export interface RootProps extends ComponentProps<"div"> {}

export function Root(props: RootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    ></div>
  );
}
