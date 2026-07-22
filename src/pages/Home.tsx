export default function Home() {
  return (
    <article>
      {/* Picture on top */}
      <img
        src="/images/home.jpg"
        alt="picture of logo"
        className="h-64 w-full rounded-2xl object-cover shadow-md sm:h-80 md:h-96"
      />

      {/* Main header */}
      <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Hi, I'm Amena
      </h1>

      {/* Paragraph */}
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
        Welcome to my corner of the web. I build products at the intersection
        of technology and design, and this site is where I share my work,
        ideas, and the occasional experiment.
      </p>

      <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Hi, I'm Amena
      </h1>

      {/* Paragraph */}
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
        Welcome to my corner of the web. I build products at the intersection
        of technology and design, and this site is where I share my work,
        ideas, and the occasional experiment.
      </p>


      
    </article>
  );
}