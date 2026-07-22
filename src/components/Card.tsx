import type { LucideIcon } from "lucide-react";

interface CardProps {
  icon: LucideIcon;
  name: string;
  title: string;
  description: string;
}

export default function Card({ icon: Icon, name, title, description }: CardProps) {
  return (
    // The "scene" — perspective gives depth to the 3D rotation
    <div className="group h-64 [perspective:1000px]">
      {/* The card — rotates 180° on hover */}
      <div className="relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        {/* FRONT: icon + name */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-2xl border border-gray-200 bg-white shadow-md [backface-visibility:hidden]">
          <Icon className="h-12 w-12 text-gray-700" strokeWidth={1.5} />
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        </div>

        {/* BACK: title + description (pre-rotated 180°) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-gray-900 px-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm leading-relaxed text-gray-300">{description}</p>
        </div>

      </div>
    </div>
  );
}