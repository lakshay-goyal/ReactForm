import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India",
    streetAddress: "", city: "", state: "", postalCode: "",
    comments: false, candidates: false, offers: false, pushNotifications: ""
  });

  const [showModal, setShowModal] = useState(false);

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setShowModal(true);
  }

  const Modal = () => (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl border border-gray-700">
        <h2 className="text-2xl font-bold text-blue-400 mb-6">Submission Success! 🎉</h2>
        
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">Personal Information</h3>
            <p className="text-gray-300"><span className="text-gray-400">Name:</span> {formData.firstName} {formData.lastName}</p>
            <p className="text-gray-300"><span className="text-gray-400">Email:</span> {formData.email}</p>
            <p className="text-gray-300"><span className="text-gray-400">Country:</span> {formData.country}</p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">Address</h3>
            <p className="text-gray-300"><span className="text-gray-400">Street:</span> {formData.streetAddress}</p>
            <p className="text-gray-300"><span className="text-gray-400">City:</span> {formData.city}</p>
            <p className="text-gray-300"><span className="text-gray-400">State:</span> {formData.state}</p>
            <p className="text-gray-300"><span className="text-gray-400">Postal Code:</span> {formData.postalCode}</p>
          </div>

          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-400 mb-3">Notification Preferences</h3>
            <p className="text-gray-300"><span className="text-gray-400">Comments:</span> {formData.comments ? "Yes" : "No"}</p>
            <p className="text-gray-300"><span className="text-gray-400">Candidates:</span> {formData.candidates ? "Yes" : "No"}</p>
            <p className="text-gray-300"><span className="text-gray-400">Offers:</span> {formData.offers ? "Yes" : "No"}</p>
            <p className="text-gray-300"><span className="text-gray-400">Push Notifications:</span> {formData.pushNotifications || "Not selected"}</p>
          </div>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-purple-600 transition duration-300 transform hover:scale-105"
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 py-6 flex flex-col justify-center sm:py-12">
      {showModal && <Modal />}
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-gray-800 shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-700">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-200 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8">Registration Form</h1>
                <form onSubmit={submitHandler} className="space-y-8">
                  <div className="grid grid-cols-1 gap-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="text-sm font-medium text-gray-300">First name</label>
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={changeHandler}
                          className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0 text-gray-200 text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last name</label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={changeHandler}
                          className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0 text-gray-200 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={changeHandler}
                        className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0 text-gray-200 text-sm"
                      />
                    </div>

                    <div>
                      <label htmlFor="country" className="text-sm font-medium text-gray-300">Country</label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={changeHandler}
                        className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0 text-gray-200 text-sm"
                      >
                        <option>India</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    {/* Address Information */}
                    <div>
                      <label htmlFor="streetAddress" className="text-sm font-medium text-gray-300">Street Address</label>
                      <input
                        type="text"
                        name="streetAddress"
                        id="streetAddress"
                        placeholder="Enter your street address"
                        value={formData.streetAddress}
                        onChange={changeHandler}
                        className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0 text-gray-200 text-sm"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="text-sm font-medium text-gray-300">City</label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          placeholder="Enter your city"
                          value={formData.city}
                          onChange={changeHandler}
                          className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0 text-gray-200 text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="state" className="text-sm font-medium text-gray-300">State</label>
                        <input
                          type="text"
                          name="state"
                          id="state"
                          placeholder="Enter your state"
                          value={formData.state}
                          onChange={changeHandler}
                          className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0 text-gray-200 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="postalCode" className="text-sm font-medium text-gray-300">Postal Code</label>
                      <input
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        placeholder="Enter your postal code"
                        value={formData.postalCode}
                        onChange={changeHandler}
                        className="mt-1 block w-full px-4 py-3 rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-600 focus:ring-0 text-gray-200 text-sm"
                      />
                    </div>

                    {/* Notifications Section */}
                    <fieldset className="mt-6">
                      <legend className="text-lg font-medium text-gray-300">Email Notifications</legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-start">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            checked={formData.comments}
                            onChange={changeHandler}
                            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                          />
                          <div className="ml-3">
                            <label htmlFor="comments" className="font-medium text-gray-300">Comments</label>
                            <p className="text-gray-400 text-sm">Get notified when someone posts a comment.</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            checked={formData.candidates}
                            onChange={changeHandler}
                            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                          />
                          <div className="ml-3">
                            <label htmlFor="candidates" className="font-medium text-gray-300">Candidates</label>
                            <p className="text-gray-400 text-sm">Get notified when a candidate applies.</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            checked={formData.offers}
                            onChange={changeHandler}
                            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                          />
                          <div className="ml-3">
                            <label htmlFor="offers" className="font-medium text-gray-300">Offers</label>
                            <p className="text-gray-400 text-sm">Get notified about offer updates.</p>
                          </div>
                        </div>
                      </div>
                    </fieldset>

                    {/* Push Notifications */}
                    <fieldset className="mt-6">
                      <legend className="text-lg font-medium text-gray-300">Push Notifications</legend>
                      <p className="text-sm text-gray-400">These are delivered via SMS to your mobile phone.</p>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="pushEverything"
                            name="pushNotifications"
                            value="Everything"
                            onChange={changeHandler}
                            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-600 bg-gray-700"
                          />
                          <label htmlFor="pushEverything" className="ml-3 text-sm font-medium text-gray-300">Everything</label>
                        </div>

                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="pushEmail"
                            name="pushNotifications"
                            value="Same as email"
                            onChange={changeHandler}
                            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-600 bg-gray-700"
                          />
                          <label htmlFor="pushEmail" className="ml-3 text-sm font-medium text-gray-300">Same as email</label>
                        </div>

                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="pushNothing"
                            name="pushNotifications"
                            value="No Push Notifications"
                            onChange={changeHandler}
                            className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-600 bg-gray-700"
                          />
                          <label htmlFor="pushNothing" className="ml-3 text-sm font-medium text-gray-300">No Push Notifications</label>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div className="pt-5">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition hover:scale-105"
                    >
                      Save Settings
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
