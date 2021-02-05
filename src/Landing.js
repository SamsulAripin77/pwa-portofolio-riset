import React from "react";
import {Link} from 'react-router-dom'
import CardProfile from './components/CardProfile';

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
          Tentang E-Portofolio
        </h2>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">
              Online Portofolio
            </h4>
            <p className="text-gray-600 mb-8">
             Dengan E-Portofolio kamu dapat mendokumentasikan prestasi non-akademik yang didapat selema perkuliahan, dan dapat kamu gunakan sewaktu-waktu, untuk kepentingan kerja, magang, pengajuan beasiswa dan lain-lain.
            </p>
          </div>
          <div className="w-full md:2-1/2">
            <img
              src="images.png"
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
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Upgrade Kualifikasi</h4>
            <p className="text-gray-600 mb-8">
              E-Portolio dapat kamu isi secara mandiri, dan hasilnya dapat dipublikasi ke orang terdekatmu, 
            </p>
          </div>
        </div>
        <div className="flex items-center flex-wrap mb-20">
          <div className="w-full md:w-1/2">
            <h4 className="text-3xl text-gray-800 font-bold mb-3">Multi Platform</h4>
            <p className="text-gray-600 mb-8">
              E-Portofolio Juga sangat mudah diisi dan dapat diakses dari berbagai perangkat, kamu jadi bisa mengisi data portofolio dimanapun dan kapanpu
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
         <h2 className="text-4xl font-bold text-center text-gray-800 pt-3">
            Portofolio Terbaru
          </h2>
        <div className="container flex sm:justify-center mx-auto px-6 py-20">
       
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-2 mb-4">
               <CardProfile
                name="Surya Ningrat"
                jurusan= "Teknik Infromatika"
                img ="/avatar/avatar-1.png"
               />
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
               <CardProfile
                  name="Jojo Ramadhan"
                  jurusan= "Teknik Infromatika"
                  img ="/avatar/avatar-2.png"
               />
            </div>
            <div className="w-full md:w-1/3 px-2 mb-4">
               <CardProfile
                  name="Jamalludin"
                  jurusan= "Teknik Infromatika"
                  img ="/avatar/avatar-3.png"
               />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
