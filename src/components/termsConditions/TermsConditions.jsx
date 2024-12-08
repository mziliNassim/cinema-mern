import React from "react";

const TermsConditions = () => {
  return (
    <>
      <div className="font-sans text-gray-200">
        <div className="max-w-4xl p-6 mx-auto mt-10 rounded-lg shadow-lg">
          <h1 className="mb-4 text-3xl font-bold text-gray-100">
            Terms and Conditions of Use
          </h1>
          <p className="mb-6 text-sm text-gray-400">
            {/* Last updated: <span className="font-semibold">11/2024</span> */}
          </p>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold text-gray-200">
              1. Introduction
            </h2>
            <p className="leading-relaxed text-gray-300">
              By using our web application dedicated to discovering movies and
              TV shows, you agree to these Terms and Conditions of Use (TCU).
              Please read them carefully before using our services.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold text-gray-200">
              2. Access to Service
            </h2>
            <p className="leading-relaxed text-gray-300">
              Our application is available to all users with an internet
              connection. We reserve the right to limit or suspend access to the
              service for maintenance, updates, or in case of non-compliance
              with these TCU.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold text-gray-200">
              3. Intellectual Property
            </h2>
            <p className="leading-relaxed text-gray-300">
              All content of the application, including texts, graphics, logos,
              and images, is protected by intellectual property laws. Any
              reproduction, modification, or distribution without authorization
              is strictly prohibited.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold text-gray-200">
              4. Acceptable Use
            </h2>
            <p className="leading-relaxed text-gray-300">
              You agree to use our application solely for personal and
              non-commercial purposes. Any abusive use, such as unauthorized
              access, modification of features, or illegal downloading of
              content, is strictly prohibited.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold text-gray-200">
              5. Limitation of Liability
            </h2>
            <p className="leading-relaxed text-gray-300">
              While we strive to provide a reliable service, we cannot guarantee
              the accuracy or continuous availability of the data provided. We
              will not be held liable for any direct or indirect damages
              resulting from the use of the application.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold text-gray-200">
              6. Modification of TCU
            </h2>
            <p className="leading-relaxed text-gray-300">
              We reserve the right to modify these TCU at any time. Changes will
              be posted here and take effect immediately. We invite you to
              regularly check this page.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-2xl font-semibold text-gray-200">
              7. Contact
            </h2>
            <p className="leading-relaxed text-gray-300">
              For any questions or concerns regarding these TCU, please contact
              us at{" "}
              <a
                href="mailto:mzilinassim@gmail.com"
                className="text-blue-500 underline"
              >
                mzilinassim@gmail.com
              </a>
              .
            </p>
          </section>

          <p className="mt-8 text-sm text-gray-500">
            By continuing to use our application, you acknowledge that you have
            read, understood, and accepted these Terms and Conditions of Use.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;
