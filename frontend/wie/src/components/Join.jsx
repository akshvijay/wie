function Join() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-softGray">
      <div className="bg-white p-10 rounded-xl shadow max-w-md text-center">
        <h2 className="text-3xl font-bold text-ieeeBlue mb-4">
          Join IEEE WIE
        </h2>

        <p className="text-darkGray mb-6">
          Be part of a community that supports growth, leadership, and innovation.
        </p>

        <a
          href="https://www.ieee.org/membership-catalog/productdetail/showProductDetailPage.html?product=MEMWIE050&searchResults=Y"
          target="_blank"
          className="bg-wiePurple text-white px-6 py-3 rounded-full font-medium"
        >
          Join Now
        </a>
      </div>
    </div>
  );
}

export default Join;
