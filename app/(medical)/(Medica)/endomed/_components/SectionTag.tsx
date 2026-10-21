import { BsHexagonFill } from "react-icons/bs";
import Typography from "./Typography";

interface SectionTagProps {
  text: string;
  light?: boolean;
  className?: string;
}

export default function SectionTag({ text, light = false, className = "" }: SectionTagProps) {
  return (
    <div className={`flex items-center gap-2 2xl:gap-3 min-[3800px]:gap-5 ${className}`}>
      <BsHexagonFill
        className={`w-7 h-7 2xl:w-8 2xl:h-8 min-[2500px]:w-11 min-[2500px]:h-11 min-[3800px]:w-14 min-[3800px]:h-14 shrink-0 ${light ? "text-white" : "text-primary"}`}
      />
      <Typography variant="h4" color={light ? "white" : "primary"} weight="bold">
        {text}
      </Typography>
    </div>
  );
}
