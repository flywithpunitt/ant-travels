import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaClock, FaUser, FaPlus } from 'react-icons/fa';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Booking() {
  const query = useQuery();
  const selectedVehicle = query.get('vehicle') || '';
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    vehicle: selectedVehicle,
    travelDateTime: '',
    pickupLocations: [''],
    dropoffLocations: [''],
    dropoffDateTime: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    kycType: '',
    kycNumber: '',
    kycFile: null,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files, dataset } = e.target;
    if (name === 'pickupLocations' || name === 'dropoffLocations') {
      const idx = parseInt(dataset.idx, 10);
      setForm((prev) => ({
        ...prev,
        [name]: prev[name].map((loc, i) => (i === idx ? value : loc)),
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: files ? files[0] : value,
      }));
    }
  };

  const addLocation = (type) => {
    setForm((prev) => ({
      ...prev,
      [type]: [...prev[type], ''],
    }));
  };

  const removeLocation = (type, idx) => {
    setForm((prev) => {
      const arr = prev[type].length > 1 ? prev[type].filter((_, i) => i !== idx) : prev[type];
      return { ...prev, [type]: arr };
    });
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto py-20 px-4 text-center">
        <div className="bg-white rounded-xl shadow-lg p-10">
          <h2 className="text-3xl font-bold mb-4 text-amber-600">Thank You!</h2>
          <p className="text-lg text-gray-700 mb-6">Your booking has been submitted successfully.<br />We will contact you soon with further details.</p>
          <div className="text-6xl mb-4">🎉</div>
          <a href="/" className="inline-block mt-4 px-8 py-3 bg-amber-500 text-white rounded-full font-semibold shadow hover:bg-amber-600 transition">Back to Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Book Your Journey</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 space-y-8">
        {/* Stepper */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`flex-1 text-center py-2 rounded-full font-semibold ${step === s ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-600'}`}>{
              s === 1 ? 'Journey' : s === 2 ? 'Personal' : 'KYC'
            }</div>
          ))}
        </div>

        {/* Step 1: Journey Details */}
        {step === 1 && (
          <div className="space-y-8">
            <div className="flex items-center mb-4">
              <FaClock className="text-amber-500 mr-2 text-xl" />
              <span className="text-xl font-semibold">Journey Details</span>
            </div>
            <div>
              <label className="block font-medium mb-1">Selected Vehicle</label>
              <input type="text" name="vehicle" value={form.vehicle} readOnly className="w-full border rounded px-4 py-3 bg-gray-100 font-semibold text-gray-800" />
            </div>
            <div>
              <label className="block font-medium mb-1">Travel Date & Time</label>
              <input type="datetime-local" name="travelDateTime" value={form.travelDateTime} onChange={handleChange} required className="w-full border rounded px-4 py-3" placeholder="Select date and time" />
            </div>
            {/* Pickup Locations */}
            <div>
              <label className="block font-medium mb-1">Pickup Location(s)</label>
              {form.pickupLocations.map((loc, idx) => (
                <div key={idx} className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    name="pickupLocations"
                    data-idx={idx}
                    value={loc}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-4 py-3"
                    placeholder="Enter pickup location"
                  />
                  <button type="button" className="text-amber-500 hover:text-amber-700 text-xl" onClick={() => addLocation('pickupLocations')} title="Add"><FaPlus /></button>
                  {form.pickupLocations.length > 1 && (
                    <button type="button" className="text-red-500 hover:text-red-700 text-xl" onClick={() => removeLocation('pickupLocations', idx)} title="Remove">-</button>
                  )}
                </div>
              ))}
            </div>
            {/* Drop-off Locations */}
            <div>
              <label className="block font-medium mb-1">Drop-off Location(s)</label>
              {form.dropoffLocations.map((loc, idx) => (
                <div key={idx} className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    name="dropoffLocations"
                    data-idx={idx}
                    value={loc}
                    onChange={handleChange}
                    required
                    className="w-full border rounded px-4 py-3"
                    placeholder="Enter drop-off location"
                  />
                  <button type="button" className="text-amber-500 hover:text-amber-700 text-xl" onClick={() => addLocation('dropoffLocations')} title="Add"><FaPlus /></button>
                  {form.dropoffLocations.length > 1 && (
                    <button type="button" className="text-red-500 hover:text-red-700 text-xl" onClick={() => removeLocation('dropoffLocations', idx)} title="Remove">-</button>
                  )}
                </div>
              ))}
            </div>
            <div>
              <label className="block font-medium mb-1">Drop-off Date & Time</label>
              <input type="datetime-local" name="dropoffDateTime" value={form.dropoffDateTime} onChange={handleChange} required className="w-full border rounded px-4 py-3" placeholder="Select date and time" />
            </div>
            <div className="flex justify-end">
              <button type="button" onClick={nextStep} className="bg-amber-500 text-white px-8 py-2 rounded font-semibold shadow hover:bg-amber-600 transition">Next</button>
            </div>
          </div>
        )}

        {/* Step 2: Personal Information */}
        {step === 2 && (
          <div className="space-y-8">
            <div className="flex items-center mb-4">
              <FaUser className="text-amber-500 mr-2 text-xl" />
              <span className="text-xl font-semibold">Personal Information</span>
            </div>
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full border rounded px-4 py-3" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border rounded px-4 py-3" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block font-medium mb-1">Phone</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full border rounded px-4 py-3" placeholder="Enter your phone number" />
            </div>
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={3} className="w-full border rounded px-4 py-3" placeholder="Enter your message" />
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-700 px-8 py-2 rounded font-semibold shadow">Back</button>
              <button type="button" onClick={nextStep} className="bg-amber-500 text-white px-8 py-2 rounded font-semibold shadow hover:bg-amber-600 transition">Next</button>
            </div>
          </div>
        )}

        {/* Step 3: KYC Details */}
        {step === 3 && (
          <div className="space-y-8">
            <div className="flex items-center mb-4">
              <span className="text-xl font-semibold">KYC Details</span>
            </div>
            <div>
              <label className="block font-medium mb-1">KYC Type</label>
              <select name="kycType" value={form.kycType} onChange={handleChange} required className="w-full border rounded px-4 py-3">
                <option value="">Select</option>
                <option value="Aadhaar">Aadhaar Card</option>
                <option value="PAN">PAN Card</option>
                <option value="Passport">Passport</option>
                <option value="DrivingLicense">Driving License</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-1">KYC Number</label>
              <input type="text" name="kycNumber" value={form.kycNumber} onChange={handleChange} required className="w-full border rounded px-4 py-3" placeholder="Enter KYC number" />
            </div>
            <div>
              <label className="block font-medium mb-1">Upload KYC Document</label>
              <input type="file" name="kycFile" accept="image/*,.pdf" onChange={handleChange} required className="w-full" />
            </div>
            <div className="flex justify-between">
              <button type="button" onClick={prevStep} className="bg-gray-300 text-gray-700 px-8 py-2 rounded font-semibold shadow">Back</button>
              <button type="submit" className="bg-amber-500 text-white px-8 py-2 rounded font-semibold shadow hover:bg-amber-600 transition">Submit</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Booking;