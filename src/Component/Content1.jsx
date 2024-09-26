import Background1 from '../../public/ovo1.png';

const Content1 = () => {
  return (
    <div className="flex items-center justify-between bg-slate-900 py-20 px-8">
     
      <div className="max-w-lg text-white">
        <h2 className="text-5xl font-bold leading-tight mb-6">
          Download OVO Sekarang
        </h2>
        <p className="text-2xl mb-6 leading-relaxed">
          OVO adalah aplikasi pembayaran digital yang memudahkan transaksi Anda
          dan memberikan lebih banyak kesempatan untuk mengumpulkan poin di
          berbagai tempat.
        </p>
        <div className="flex space-x-4">
          <button className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-3 px-6 rounded-full text-lg font-semibold transition-transform transform hover:scale-110 hover:text-white">
            Download di App Store
          </button>
          <button className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-3 px-6 rounded-full text-lg font-semibold transition-transform transform hover:scale-110 hover:text-white">
            Download di Google Play
          </button>
        </div>
      </div>

      <div className="w-1/2">
        <img 
          src={Background1} 
          alt="OVO" 
         
        />
      </div>
    </div>
  );
};

export default Content1;
