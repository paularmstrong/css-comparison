import * as React from "react";

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="rounded bg-primary-800 text-white">{children}</button>
  );
}
