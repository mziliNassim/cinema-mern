import React from "react";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="font-sans text-gray-200">
        <div className="max-w-4xl p-6 mx-auto mt-10 text-white rounded-lg shadow-lg">
          <h1 className="mb-4 text-3xl font-bold text-gray-100">
            Privacy Policy
          </h1>
          <p className="mb-6 text-sm text-gray-400">
            {/* Last updated: <span className="font-semibold">11/2024</span> */}
          </p>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold text-gray-200">
              1. Information Collection
            </h2>
            <p className="leading-relaxed text-gray-300">
              We collect certain data necessary to provide you with an optimal
              experience:
            </p>
            <ul className="mt-3 ml-6 text-gray-300 list-disc">
              <li>
                <span className="font-medium">Non-personal data:</span>{" "}
                information about your device, browser type, language, and usage
                preferences.
              </li>
              <li>
                <span className="font-medium">Personal data:</span> if you
                create an account, we collect your email address, username, and
                any other information you voluntarily provide.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold text-gray-200">
              2. Use of Information
            </h2>
            <ul className="mt-3 ml-6 text-gray-300 list-disc">
              <li>Provide smooth and personalized navigation.</li>
              <li>Improve our services and features.</li>
              <li>Inform you of new features or updates.</li>
            </ul>
            <p className="mt-3 text-gray-300">
              We do not sell or rent your data to third parties.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold text-gray-200">
              3. Data Sharing
            </h2>
            <p className="leading-relaxed text-gray-300">
              Your data may be shared with:
            </p>
            <ul className="mt-3 ml-6 text-gray-300 list-disc">
              <li>
                Our technical partners to ensure the maintenance and improvement
                of the application.
              </li>
              <li>Legal authorities if required by law.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold text-gray-200">
              4. Cookies and Similar Technologies
            </h2>
            <p className="leading-relaxed text-gray-300">We use cookies to:</p>
            <ul className="mt-3 ml-6 text-gray-300 list-disc">
              <li>Analyze the use of the application.</li>
              <li>Remember your preferences.</li>
            </ul>
            <p className="mt-3 text-gray-300">
              You can manage your preferences or disable cookies through your
              browser settings.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold text-gray-200">
              5. Data Security
            </h2>
            <p className="leading-relaxed text-gray-300">
              We implement technical and organizational security measures to
              protect your information from unauthorized access, loss, or
              alteration.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold text-gray-200">
              6. Your Rights
            </h2>
            <ul className="mt-3 ml-6 text-gray-300 list-disc">
              <li>Access your information.</li>
              <li>Modify or delete your data.</li>
              <li>Object to their use for specific purposes.</li>
            </ul>
            <p className="mt-3 text-gray-300">
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:mzilinassim@gmail.com"
                className="text-blue-500 underline"
              >
                mzilinassim@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-2xl font-semibold text-gray-200">
              7. Changes to This Policy
            </h2>
            <p className="leading-relaxed text-gray-300">
              We may update this Privacy Policy to reflect changes in our
              practices or for legal reasons. Any changes will be posted here
              and dated.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
