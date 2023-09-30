import { BiSolidLike, BiSolidDislike } from "react-icons/bi";

export default function LikeUnlike() {
  return (
    <div className="flex gap-10 w-48">
      <div className="flex items-center gap-1">
        <div className="shrink-0 text-2xl">
          <BiSolidLike />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">100K</div>
      </div>
      <div className="flex items-center gap-1">
        <div className="shrink-0 text-2xl">
          <BiSolidDislike />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">100K</div>
      </div>
    </div>
  );
}
