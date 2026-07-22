import TeamMember from "../components/TeamMember";

export default function About() {
    return (
    <article className="mx-auto max-w-2xl">
    
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Hi, I'm Amena
        </h1>

        {/* Paragraph */}
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
        Welcome to my corner of the web. I build products at the intersection
        of technology and design, and this site is where I share my work,
        ideas, and the occasional experiment.
        </p>

        <section>
        {/* Section title */}
        <header className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            The Team
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-lg text-gray-600">
            The people behind the work.
            </p>
        </header>

        {/* People grid */}
        <div>
            <TeamMember
            name="Amena Khan"
            role="Founder & CEO"
            image="/images/amena.jpg"
            >
            <p>
                Serial entrepreneur with 15+ years across banking, energy,
                healthcare, and media in the GCC, Africa, and Asia.
            </p>
            </TeamMember>

        </div>
        </section>
       
    </article>
    );
}