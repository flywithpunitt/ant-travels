import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/bookings')
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch bookings');
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-amber-50 py-12 px-2 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <h2 className="text-4xl font-extrabold mb-2 text-center text-[#1e40af] tracking-tight">Booking Dashboard</h2>
          <p className="text-center text-gray-500 mb-6">See all bookings made through your website</p>
          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <span className="inline-block bg-amber-100 text-amber-700 font-semibold px-4 py-2 rounded-full text-sm shadow">Total Bookings: {bookings.length}</span>
            <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full text-sm shadow">Last Updated: {new Date().toLocaleString()}</span>
          </div>
          {loading ? (
            <div className="text-center py-12 text-lg font-semibold text-blue-600 animate-pulse">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500 py-12">{error}</div>
          ) : bookings.length === 0 ? (
            <div className="text-center text-gray-400 py-12">No bookings found.</div>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gradient-to-r from-amber-500 to-blue-500 text-white sticky top-0 z-10">
                  <tr>
                    <th className="py-3 px-4 text-left font-bold uppercase tracking-wider">Name</th>
                    <th className="py-3 px-4 text-left font-bold uppercase tracking-wider">Email</th>
                    <th className="py-3 px-4 text-left font-bold uppercase tracking-wider">Phone</th>
                    <th className="py-3 px-4 text-left font-bold uppercase tracking-wider">Vehicle</th>
                    <th className="py-3 px-4 text-left font-bold uppercase tracking-wider">Date</th>
                    <th className="py-3 px-4 text-left font-bold uppercase tracking-wider">Message</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {bookings.map((b, i) => (
                    <tr key={b._id} className={i % 2 === 0 ? 'bg-gray-50 hover:bg-blue-50 transition' : 'bg-white hover:bg-blue-50 transition'}>
                      <td className="py-3 px-4 font-medium text-gray-900">{b.name}</td>
                      <td className="py-3 px-4 text-blue-700 underline break-all">{b.email}</td>
                      <td className="py-3 px-4">{b.phone}</td>
                      <td className="py-3 px-4 text-amber-700 font-semibold">{b.vehicle}</td>
                      <td className="py-3 px-4 text-gray-600">{b.date ? new Date(b.date).toLocaleString() : ''}</td>
                      <td className="py-3 px-4 text-gray-600 max-w-xs truncate" title={b.message}>{b.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 