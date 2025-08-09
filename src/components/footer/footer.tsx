export function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                            <span className="text-black font-bold ">M</span>
                        </div>
                        <span className="font-semibold text-white">MindStack</span>
                    </div>

                    {/* Links */}
                    <div className="flex items-center space-x-6">
                        <p>Hecho con 🤍 por Andres</p>

                    </div>
                </div>
            </div>
        </footer>
    )
}
