function Contact() {
  return (
    <section className="bg-white pt-8 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Top centered heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl font-semibold text-ieeeBlue mb-3">
            Contact Us
          </h2>

          <p className="text-gray-700 font-medium">
            IEEE Women in Engineering – BMSIT&M
          </p>

          <p className="text-gray-500 mt-4 leading-relaxed">
            Let’s connect, collaborate, and build a stronger tech community together.
          </p>
        </div>

        {/* Main contact layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left side — Email & Location */}
          <div className="space-y-10">

            <div>
              <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">
                Email
              </p>
              <a
                href="mailto:ieee.wie@bmsit.in"
                className="text-lg font-medium text-gray-900 hover:text-ieeeBlue transition"
              >
                ieee.wie@bmsit.in
              </a>
            </div>

            <div>
              <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">
                Location
              </p>
              <p className="text-lg font-medium text-gray-900">
                Bengaluru, Karnataka
              </p>
            </div>

          </div>

          {/* Right side — Social links */}
          <div>
            <p className="text-sm text-gray-400 uppercase tracking-wide mb-6">
              Connect
            </p>

            <div className="space-y-4">

              <a
                href="https://www.instagram.com/ieeewie.bmsit/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border rounded-lg px-6 py-4 hover:border-ieeeBlue hover:shadow-sm transition"
              >
                <span className="font-medium text-gray-800">Instagram</span>
                <span className="text-gray-400">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/ieee-wie-15217935b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border rounded-lg px-6 py-4 hover:border-ieeeBlue hover:shadow-sm transition"
              >
                <span className="font-medium text-gray-800">LinkedIn</span>
                <span className="text-gray-400">↗</span>
              </a>

              <a
                href="#"
                className="flex items-center justify-between border rounded-lg px-6 py-4 hover:border-ieeeBlue hover:shadow-sm transition"
              >
                <span className="font-medium text-gray-800">InfoBoard</span>
                <span className="text-gray-400">↗</span>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;