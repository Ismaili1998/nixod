import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import classNames from 'classnames';
import landing_img from '../img/contact.svg';
import { useSpring, animated } from 'react-spring';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import Modal from 'react-modal';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Set the root element for the modal
Modal.setAppElement('#root');


const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });


  const database = getDatabase(app);
  const formsRef = ref(database, 'messages');

  // Replace these with your actual success and failure messages
  const successMessage = "Message sent successfully. We will contact you as soon as possible.";
  const failureMessage = "Message not sent. Please try again. The issue is related to the connection.";

  const [modalIsOpen, setModalIsOpen] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  function handleSubmit(event) {
    event.preventDefault();

    // Encode the message with newlines converted to HTML line breaks
    const encodedMessage = encodeMessage(formData.message);


    // Save data to Firebase
    const pushPromise = push(formsRef, {
      name: formData.name,
      email: formData.email,
      message: encodedMessage,
    });

    // Handle success or failure
    pushPromise
      .then(() => {
        // Data saved successfully
        setModalIsOpen(1);
        // Reset the form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        // Error saving data
        setModalIsOpen(2);
      })
      .finally(() => {
        //TODO
      });
  }



  // Helper function to replace newline characters
  function encodeMessage(input) {
    return input.replace(/\n/g, '__');
  }

  // Animation for the form
  const formAnimation = useSpring({
    to: { opacity: 1, transform: 'translateY(0)' },
    from: { opacity: 0, transform: 'translateY(-20px)' },
    delay: 300,
  });

  // Animation for the image
  const imageAnimation = useSpring({
    to: { opacity: 1, transform: 'translateX(0)' },
    from: { opacity: 0, transform: 'translateX(-20px)' },
    delay: 600,
  });


  const handleOkClick = () => {
    setModalIsOpen(0);
  };


  let modalContent;
  if (modalIsOpen === 1) {
    modalContent = (
      <>
        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
          Message sent successfully
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            {successMessage}
          </p>
        </div>
      </>
    );
  } else if (modalIsOpen === 2) {
    modalContent = (
      <>
        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
          Message not sent
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            {failureMessage}
          </p>
        </div>
      </>
    );
  }


  return (
    <div id="containerContact">
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:flex sm:items-center sm:justify-between">
          <animated.div style={imageAnimation} className="sm:flex-1">
            <h1 className='text-6xl'> Let'us Talk </h1>
            <a href="mailto:contact@nixod.com">
              <h1 className='text-2xl w-fit border-b-4 focus:text-teal-700 my-2'> contact@nixod.com </h1>
            </a>
            <img src={landing_img} alt="Landing" className="rounded-lg w-96" />
          </animated.div>
          <animated.div style={formAnimation} className="max-w-xl mx-auto mt-8 mb-0 space-y-4 sm:ml-8 sm:mt-0 sm:flex-1">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl">Get in Touch</h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                Have any questions? We'd love to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 
                  bg-white border border-gray-300 shadow-sm focus:border-teal-500 
                  focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 
                  bg-white border border-gray-300 shadow-sm focus:border-teal-500 
                  focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 
                  bg-white border border-gray-300 shadow-sm focus:border-teal-500 
                  focus:outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-teal-600 border border-transparent rounded-md shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                Send Message
              </button>
            </form>
          </animated.div>
        </div>
      </section>
      {/* Modal */}
      <Transition.Root show={modalIsOpen !== 0} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto"
          onClose={() => setModalIsOpen(0)}
        >
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-transparent px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className={classNames(
                      "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full",
                      {
                        'bg-green-100': modalIsOpen === 1,
                        'bg-red-100': modalIsOpen === 2,
                      }
                    )}>
                      <svg
                        className={classNames(
                          "h-6 w-6",
                          {
                            'text-green-600': modalIsOpen === 1,
                            'text-red-600': modalIsOpen === 2,
                          }
                        )}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        {modalIsOpen === 1 ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        ) : (
                          <path strokeLinecap="" strokeLinejoin="" strokeWidth="2" d="M5 18L18 6M6 6l12 12" />
                        )}
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      {modalContent}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className={classNames(
                      "w-full inline-flex justify-center rounded-md border shadow-sm px-4 py-2",
                      {
                        'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500': modalIsOpen === 1,
                        'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500': modalIsOpen === 2,
                      }
                    )}
                    onClick={handleOkClick}
                  >
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Contact;
