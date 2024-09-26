import Background2 from '../../public/Background2.png'; 

const Content2 = () => {
  return (
    <section className="flex flex-wrap justify-between items-center bg-gradient-to-r from-purple-900 to-black h-[570px] p-8">
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={Background2} alt="Background" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>

     
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center text-white p-6 space-y-8">
       


        <h2 className="text-4xl font-bold">Poin Berlipat</h2>
        <p className="text-lg max-w-lg">
          Dapatkan lebih banyak poin dengan setiap transaksi dan nikmati berbagai penawaran eksklusif.
        </p>

   
        <div className="flex space-x-4">
          <a href="#learn-more" className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300">
            Learn More
          </a>
          <a href="#sign-up" className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300">
            Sign Up
          </a>
        </div>
      </div>
    </section>
  );
};

export default Content2;
