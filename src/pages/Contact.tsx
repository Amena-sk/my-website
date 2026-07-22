import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="mx-auto max-w-2xl">
      {/* Title */}
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Get in touch
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-lg text-gray-600">
          I'd love to hear from you — reach me directly below.
        </p>
      </header>

      {/* Contact details */}
      <ul className="mt-12 space-y-6">
        {/* Email */}
        <li>
            <a
            href="mailto:hello@example.com"
            className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 hover:shadow-md"
            >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-900">
                    <Mail className="h-5 w-5 text-gray-700 transition-colors group-hover:text-white" />
                </span>
                <span>
                    <span className="block text-sm font-medium text-gray-500">Email</span>
                    <span className="block text-lg font-semibold text-gray-900">
                    hello@example.com
                    </span>
                </span>
            </a>
        </li>

        {/* Phone */}
        <li>
            <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100">
                    <Phone className="h-5 w-5 text-gray-700" />
                </span>
                <span>
                    <span className="block text-sm font-medium text-gray-500">Phone</span>
                    <span className="block text-lg font-semibold text-gray-900">
                    +351 123 456 789
                    </span>
                </span>
            </div>
        </li>
      </ul>
    </section>
  );
}