import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const About = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            
            <main className="flex-grow flex flex-col items-center justify-center bg-purple-800 text-white py-20">
                <h1 className="text-5xl font-bold mb-6 text-center">Tentang OVO</h1>
                <p className="text-lg mb-12 max-w-2xl text-center opacity-90">
                    OVO adalah platform pembayaran digital terdepan di Indonesia yang menyediakan berbagai layanan untuk memudahkan transaksi Anda. 
                    Dengan OVO, Anda dapat melakukan pembayaran di berbagai merchant, mengakses OVO Points, dan menikmati berbagai penawaran menarik.
                </p>
                
                <div className="bg-white text-purple-800 rounded-lg shadow-lg p-8 max-w-3xl text-center mb-10">
                    <h2 className="text-3xl font-semibold mb-4">Mengapa Memilih OVO?</h2>
                    <p className="text-lg mb-4">
                        • Pembayaran cepat dan mudah di berbagai merchant<br />
                        • Akses OVO Points untuk mendapatkan rewards menarik<br />
                        • Keamanan transaksi terjamin dengan teknologi mutakhir
                    </p>
                    <p className="text-lg">
                        Bergabunglah dengan jutaan pengguna OVO dan nikmati kemudahan bertransaksi sehari-hari!
                    </p>
                </div>

                <div className="flex space-x-4">
                    <button className="bg-white text-purple-800 rounded-full px-6 py-2 font-semibold hover:bg-purple-100 transition">
                        Pelajari Lebih Lanjut
                    </button>
                    <button className="bg-transparent border border-white rounded-full px-6 py-2 font-semibold hover:bg-white hover:text-purple-800 transition">
                        Daftar Sekarang
                    </button>
                </div>
            </main>
            
            <Footer />
        </div>
    );
};

export default About;
