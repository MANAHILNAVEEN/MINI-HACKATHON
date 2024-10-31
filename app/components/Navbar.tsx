
export default function Navbar(){
    return(
        <header>
            <nav className="flex bg-blue-800 w-full h-20 gap-3 mt-4 shadow-lg "> 
                <div className="flex">
                    <img alt="Pakwheels logo white" height={150} width={150}
                    src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg">                  
                    </img>                   
                </div>
                <div className="flex p-2 w-4/5 m-4 justify-evenly items-center text-white gap-4">
                    <div>Used Cars</div>
                    <div>New Cars</div>
                    <div>Bikes</div>
                    <div>Auto Store</div>
                    <div>Video</div>
                    <div>Forum</div>
                    <div>Blog</div>
                    <div>More</div>
                    <button className="bg-red-800 gap-2 px-2 py-2 text-white">Post an Add</button>

                </div>
            </nav>
        </header>
    )
}


