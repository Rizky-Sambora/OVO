
import Navbar from '../Component/Navbar'
import FeaturesImage from '../../public/Features.png';
import PhoneImage from '../../public/handphone.png';
import Footer from '../Component/Footer'



const Features = () => {
    return (
       
     <div>

            <Navbar />

            <main className="flex-grow flex items-center justify-center bg-purple-800 py-20">
    <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-8 text-white">Fitur</h1>
        <p className="text-lg mb-12 max-w-xl mx-auto text-gray-200">Temukan fitur-fitur menakjubkan yang kami tawarkan untuk meningkatkan pengalaman Anda.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105">
                <img src={FeaturesImage} alt="Fitur" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h2 className="text-xl font-semibold mb-2 text-purple-600">Fitur Satu</h2>
                <p className="text-gray-600">Detail tentang fitur satu.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105">
                <img src={PhoneImage} alt="Handphone" className="w-full h-48 object-cover rounded-lg mb-4" />
                <h2 className="text-xl font-semibold mb-2 text-purple-600">Fitur Dua</h2>
                <p className="text-gray-600">Detail tentang fitur dua.</p>
            </div>
        </div>
    </div>
</main>




            <Footer />

     </div>

        

  );
};

export default Features;