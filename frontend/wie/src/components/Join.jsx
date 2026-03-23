function Join() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-6 py-20">
      <div
        className="glass-card p-12 max-w-md w-full text-center"
        style={{
          boxShadow: "0 0 60px rgba(124,58,237,0.25), 0 8px 32px rgba(0,0,0,0.5)",
        }}
      >
        {/* Decorative top badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
          style={{ background: "rgba(124,58,237,0.2)", color: "#c4b5fd", border: "1px solid rgba(124,58,237,0.3)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-glow-pulse" />
          IEEE WIE Membership
        </div>

        <h2
          className="text-3xl font-display font-bold text-white mb-4 glow-text"
          style={{ lineHeight: 1.2 }}
        >
          Join IEEE WIE
        </h2>

        <p className="text-white/65 mb-10 leading-relaxed text-sm">
          Be part of a community that supports growth, leadership, and innovation.
        </p>

        <a
          href="https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMWIE050&searchResults=Y"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient"
        >
          Join Now
        </a>
      </div>
    </div>
  );
}

export default Join;
