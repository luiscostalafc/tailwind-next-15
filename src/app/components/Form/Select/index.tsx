"use client";

import { ReactNode } from "react";
import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

type SelectInputProps = Select.SelectProps & {
  children: ReactNode;
  placeholder: string;
};

export function SelectInput({
  children,
  placeholder,
  ...rest
}: SelectInputProps) {
  return (
    <Select.Root {...rest}>
      <Select.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300  px-3 py-2 shadow-sm data-[placeholder]:bg-zinc-600">
        <Select.Value className="text-black" placeholder={placeholder} />
        <Select.Icon>
          <ChevronDown className="size-5 text-zinc-500" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-300 bg-white shadow-sm"
        >
          <Select.Viewport>{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
