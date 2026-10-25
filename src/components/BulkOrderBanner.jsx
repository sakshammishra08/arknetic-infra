export default function BulkOrderBanner() {
  return (
    <section id="bulk" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold mb-2">We Accept Bulk Orders</h3>
          <p className="text-gray-300 max-w-xl">
            Looking for t-shirts or shirts in bulk for your business, event,
            or team? We offer custom designs and competitive pricing for
            large quantities.
          </p>
        </div>
        <a
          href="https://wa.me/918409972021"
          target="_blank"
          rel="noreferrer"
          className="bg-white text-black px-6 py-3 font-semibold rounded-md whitespace-nowrap hover:bg-gray-200"
        >
          Contact on WhatsApp
        </a>
      </div>
    </section>
  );
}
