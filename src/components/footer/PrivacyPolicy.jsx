import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 py-16 px-4 overflow-auto">
      <div className="w-full max-w-4xl text-white space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-blue-300">Privacy Policy</h1>

        <section>
          <h2 className="text-3xl font-semibold text-blue-200 mb-4">Introduction</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            Welcome to our Privacy Policy page! Your privacy is very important to us. This Privacy Policy document outlines
            the types of personal information that is received and collected by Surakshit Web team and how it is used.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-blue-200 mb-4">Information We Collect</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            We collect various types of information in order to provide and improve our service to you. This includes:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-200 space-y-2">
            <li>Personal Information: When you sign up, we may collect personal details like your name, email, and contact information.</li>
            <li>Usage Data: We may collect information on how the service is accessed and used, such as your IP address, browser type, and the pages you visit.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-blue-200 mb-4">How We Use Your Information</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            We use the collected information in the following ways:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-200 space-y-2">
            <li>To provide, operate, and maintain our service.</li>
            <li>To improve, personalize, and expand our service.</li>
            <li>To communicate with you, including sending updates, promotions, and other marketing materials.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-blue-200 mb-4">Sharing Your Information</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information in the following cases:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-200 space-y-2">
            <li>If required by law or to comply with legal obligations.</li>
            <li>To protect and defend our rights or the safety of our users.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-blue-200 mb-4">Cookies</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            We use cookies to enhance user experience. Cookies are small files stored on your device that help us analyze web traffic and improve our services. You can choose to disable cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-blue-200 mb-4">Data Security</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            We implement security measures to protect your personal information. However, no method of transmission over the internet or method of electronic storage is completely secure, so we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-blue-200 mb-4">Your Data Protection Rights</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            Depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul className="list-disc pl-6 text-lg text-gray-200 space-y-2">
            <li>The right to access your personal data.</li>
            <li>The right to correct or update your personal data.</li>
            <li>The right to delete your personal data.</li>
            <li>The right to restrict the processing of your data.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-blue-200 mb-4">Third-Party Links</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites, and we encourage you to review their privacy policies before submitting any personal information.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-blue-200 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-4">
            We may update our Privacy Policy from time to time. Any changes will be posted on this page, and we will update the "last updated" date at the top of the page. Please review this Privacy Policy periodically for any updates.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
