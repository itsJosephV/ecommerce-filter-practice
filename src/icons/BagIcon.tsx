import { SVGProps } from "react";

export function BagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6 22q-.825 0-1.412-.587T4 20V8q0-.825.588-1.412T6 6h2q0-1.65 1.175-2.825T12 2q1.65 0 2.825 1.175T16 6h2q.825 0 1.413.588T20 8v12q0 .825-.587 1.413T18 22H6Zm0-2h12V8h-2v2q0 .425-.288.713T15 11q-.425 0-.712-.288T14 10V8h-4v2q0 .425-.288.713T9 11q-.425 0-.712-.288T8 10V8H6v12Zm4-14h4q0-.825-.587-1.412T12 4q-.825 0-1.412.588T10 6ZM6 20V8v12Z"
      ></path>
    </svg>
  );
}
