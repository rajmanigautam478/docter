import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-10'>
      <h1 className='text-3xl font-semibold mb-6'>Privacy Policy</h1>
      
      <div className='flex flex-col gap-6 text-gray-700'>
        <section>
          <h2 className='text-xl font-medium text-gray-900 mb-2'>1. Information We Collect</h2>
          <p>
            Welcome to our Doctor Appointment App. We value your privacy and are committed to protecting your personal data. We collect information you provide directly to us when you create an account, update your profile, use our services, or communicate with us. This may include your name, email address, phone number, and medical history or symptoms that you choose to share.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-medium text-gray-900 mb-2'>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services. Specifically, we use your data to:
          </p>
          <ul className='list-disc pl-5 mt-2 flex flex-col gap-1'>
            <li>Facilitate appointment bookings with healthcare professionals.</li>
            <li>Send you appointment reminders and important updates.</li>
            <li>Improve the functionality and user experience of our app.</li>
            <li>Respond to your comments, questions, and customer service requests.</li>
          </ul>
        </section>

        <section>
          <h2 className='text-xl font-medium text-gray-900 mb-2'>3. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-medium text-gray-900 mb-2'>4. Sharing of Information</h2>
          <p>
            We may share your information with healthcare providers you choose to book appointments with to facilitate your care. We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information with our business partners and trusted affiliates.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-medium text-gray-900 mb-2'>5. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className='text-xl font-medium text-gray-900 mb-2'>Contact Us</h2>
          <p>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy
