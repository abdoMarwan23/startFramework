

export default function Footer() {
    return (
        <>
        <footer className="cyber-grid relative overflow-hidden bg-[#2c3e50] text-white ">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl text-center font-bold text-white mb-4">LOCATION</h3>
                        <p className="text-center">2215 John Daniel Drive</p>
                        <p className="text-center">Clark, MO 65243</p>
                    </div>
                    <div className="text-center">
                        <h4 className="text-2xl font-bold text-white mb-4">AROUND THE WEB</h4>
                        <div className="space-x-4">
                            <a href="#" className="border-2 p-2 rounded-full"><i className="fab fa-facebook-f w-5 h-5" /></a>
                            <a href="#" className="border-2 p-2 rounded-full"><i className="fab fa-twitter w-5 h-5" /></a>
                            <a href="#" className="border-2 p-2 rounded-full"><i className="fab fa-instagram w-5 h-5" /></a>
                            <a href="#" className="border-2 p-2 rounded-full"><i className="fab fa-linkedin-in w-5 h-5" /></a>
                        </div>
                    </div>
                    <div className="text-center md:text-right">
                        <h4 className="text-2xl text-center font-bold text-white mb-4">ABOUT FREELANCER</h4>
                        <p className="text-center">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </footer>
            <div className=" p-4 bg-[#1a252f] text-white text-center w-full">
                <p className="text-center">© 2024 CYBERLINK. All rights reserved.</p>
            </div>
        </>

    );
}
