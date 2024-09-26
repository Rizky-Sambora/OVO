import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const Contact = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow flex flex-col items-center justify-center bg-purple-800 text-white py-20">
                <h1 className="text-5xl font-bold mb-8 text-center">Kontak Kami</h1>
                <p className="text-lg mb-12 max-w-2xl text-center opacity-90">
                    Jika Anda memiliki pertanyaan atau membutuhkan bantuan, silakan isi formulir di bawah ini. Kami akan segera menghubungi Anda.
                </p>

                <form className="bg-white text-purple-800 rounded-lg shadow-lg p-8 max-w-2xl w-full">
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2" htmlFor="name">Nama Lengkap</label>
                        <input 
                            type="text" 
                            id="name" 
                            className="border border-gray-300 rounded-lg w-full p-2"
                            placeholder="Masukkan nama Anda" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2" htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="border border-gray-300 rounded-lg w-full p-2"
                            placeholder="Masukkan email Anda" 
                            required 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-lg font-semibold mb-2" htmlFor="message">Pesan</label>
                        <textarea 
                            id="message" 
                            className="border border-gray-300 rounded-lg w-full p-2" 
                            rows="4" 
                            placeholder="Tulis pesan Anda di sini" 
                            required 
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="bg-purple-600 text-white rounded-lg px-6 py-2 font-semibold hover:bg-purple-700 transition"
                    >
                        Kirim Pesan
                    </button>
                </form>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
