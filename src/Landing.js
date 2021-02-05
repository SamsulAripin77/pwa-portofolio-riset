import React from "react";
import {Link} from 'react-router-dom'

function Landing(props) {
  return (
    <div>
      <nav className="bg-blue-400">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <Link className="font-bold text-2xl lg:text-4xl text-white" to="/">
            E-Portofolio
          </Link>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex">
              <li>
                <Link className="px-4 font-bold bg-blue-600 rounded-full px-1 pb-2 pt-1 text-white" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="py-20 bg-blue-300">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-2 text-white">
              Selamat Datang di Repository E-Portofolio Mahasiswa
          </h2>
          <h3 className="text-2xl mb-8 text-gray-200">
            Tambah data portofolio anda dengan meningkatkan kualifiasi diri
          </h3>
          <button className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            Learn More
          </button>
        </div>
      </div>
      <section className="container mx-auto px-6 p-10">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Features
        </h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Exercise Metrics
            </h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch is able to capture you
              vitals while you exercise. You can create different category of
              exercises and can track your vitals on the go.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://www.dropbox.com/s/mimcvn6zxtoruis/health.svg?raw=1"
              alt="Monitoring"
            />
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <img
              src="https://www.dropbox.com/s/hllo2ueo8zgi2tt/report.svg?raw=1"
              alt="Reporting"
            />
          </div>
          <div className="w-full md:w-1/2 pl-10">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Reporting</h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch can generate a
              comprehensive report on your vitals depending on your settings
              either daily, weekly, monthly, quarterly or yearly.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Syncing</h4>
            <p className="text-gray-600 mb-8">
              Our Smart Health Monitoring Wristwatch allows you to sync data
              across all your mobile devices whether iOS, Android or Windows OS
              and also to your laptop whether MacOS, GNU/LInux or Windows OS.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://www.dropbox.com/s/v0x0ywlvgmw04z6/sync.svg?raw=1"
              alt="Syncing"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="container mx-auto px-6 py-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Testimonials
          </h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-2 mb-4">
              <div className="bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  Monitoring and tracking my health vitals anywhere I go and on
                  any platform I use has never been easier.
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">John Doe</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
              <div className="bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  As an Athlete, this is the perfect product for me. I wear my
                  Smart Health Monitoring Wristwatch everywhere i go, even in
                  the bathroom since it's waterproof.
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">Jane Doe</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
              <div className="bg-white rounded shadow py-2">
                <p className="text-gray-800 text-base px-6 mb-5">
                  I don't regret buying this wearble gadget. One of the best
                  gadgets I own!.
                </p>
                <p className="text-gray-500 text-xs md:text-sm px-6">James Doe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-300">
        <div className="container mx-auto px-6 text-center py-20">
          <h2 className="mb-6 text-4xl font-bold text-center text-white">
            Limited in Stock
          </h2>
          <h3 className="my-4 text-2xl text-white">
            Get yourself the Smart Health Monitoring Wristwatch!
          </h3>
          <button className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
            Pre Order
          </button>
        </div>
      </section>

      <footer className="bg-gray-100">
        <div className="container mx-auto px-6 pt-10 pb-6">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Links</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <Link
                    to="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Help
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Legal</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <Link
                    to="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Terms
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Social</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <Link
                    to="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Facebook
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Linkedin
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 text-center md:text-left ">
              <h5 className="uppercase mb-6 font-bold">Company</h5>
              <ul className="mb-4">
                <li className="mt-2">
                  <Link
                    to="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Official Blog
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="#"
                    className="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;