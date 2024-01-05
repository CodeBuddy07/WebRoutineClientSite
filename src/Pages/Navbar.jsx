

const Navbar = () => {
    return (
        <div className="bg-green-400 md:px-40 p-3 py-3 flex items-center gap-2">
            <img className="w-16" src="brandLogo.png" alt="" />
            <h1 className="text-xl font-bold text-white drop-shadow-md"> Web <span className="text-yellow-400">Routine</span> </h1>
        </div>
    );
};

export default Navbar;