"use client";

import { ComponentProps } from "react";
import { useFileInput } from "./Root";

export type ControlProps = ComponentProps<"input">;

export function Control({ multiple = false, ...rest }: ControlProps) {
  const { id, onFilesSelected } = useFileInput();

  function handleFilesSelected(event: React.ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return;

    const files = Array.from(event.target.files);
    onFilesSelected(files, multiple);
  }

  return (
    <input
      onChange={handleFilesSelected}
      multiple={multiple}
      type="file"
      className="sr-only"
      id={id}
      {...rest}
    />
  );
}
