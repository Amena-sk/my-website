interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  children: React.ReactNode;
}

export default function TeamMember({ name, role, image, children }: TeamMemberProps) {
  return (
    <article className="text-center">
      {/* Image */}
      <img
        src={image}
        alt={`Portrait of ${name}`}
        className="mx-auto h-40 w-40 rounded-full object-cover shadow-md"
      />

      {/* Name + title */}
      <header className="mt-6">
        <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
        <p className="mt-1 text-sm font-medium text-gray-500">{role}</p>
      </header>

      {/* Description */}
      <div className="mt-4 space-y-3 text-base leading-relaxed text-gray-600">
        {children}
      </div>
    </article>
  );
}