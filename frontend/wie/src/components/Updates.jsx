function Updates() {
  const upcomingEvents = [
    "Code Eleven",
    "Faculty Workshop",
    "Game Craft",
    "Elicit",
  ];

  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3">Updates</h2>
          <p className="text-gray-600">
            Announcements, upcoming events, and official notices from IEEE WIE BMSIT&M
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm mb-12">
          <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-ieeeBlue text-white">
            UPCOMING EVENTS
          </span>

          <h3 className="text-2xl font-semibold mb-4">
            What’s Coming Up
          </h3>

          <ul className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <li
                key={index}
                className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-lg text-gray-800 font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-ieeeBlue"></span>
                {event}
              </li>
            ))}
          </ul>

          <p className="text-sm text-gray-500 mt-6">
            Event dates and registration details will be announced soon.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Updates;
