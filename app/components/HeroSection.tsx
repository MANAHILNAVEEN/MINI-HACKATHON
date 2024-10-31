import Link from "next/link";
export default function HeroSection(){
    return( <>
        <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="w-full max-w-4xl p-4 bg-black border rounded-lg shadow-white">
            <h2 className="flex justify-center text-2xl mb-6">Sell your Car on PakWheels and get the best Price</h2>
            <div className="flex justify-between gap-6 items-center">
                {/* for left side */}
                <div className="flex-1 p-6 border rounded-lg text-center">
                    <h3 className="flex text-xl font-medium mb-4">Post your Ad on PakWheel</h3>
                    <ul className="mb-6 text-left space-y-2">
                    <li> Post your Ad for free in 3 easy steps</li>
                    <li> Get grnuine offers for verified buyers</li>
                    <li>Sell your car at the best price</li>
                    </ul>
                    <button className="w-full py-2 text-white bg-red-500 rounded-lg hover:bg-red-600">
                    Post your Ad
                    </button>
                </div>
                {/*for or text*/}
                <div className="text-center font-semibold text-white pt-28">OR</div>
                 {/*for right side*/}
                 <div className="flex-1 p-6 border rounded-lg text-center">
                    <h3 className="flex text-xl font-medium mb-4">Try PakWheel Sell it for me</h3>
                    <ul className="mb-6 text-left space-y-2">
                        <li>Dedicated sell Experts to sell your Car</li>
                        <li>We Bargain for you and share the best offer</li>
                        <li>We ensure safe and secure Transiction</li>
                    </ul>
                    <button className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                     Register your Car
                    </button>
                 </div>
            </div>
        </div>
        </div>

        <section>
        <div className="flex justify-between h-2">
                <h3 className="font-bold text-xl">Featured New Cars</h3>
                <h4 className="text-blue-600">View All New Cars</h4>
            </div>

            <div className="flex justify-start h-5 py-10 text-lg gap-10">
                <h2 className="font-semibold ">Popular</h2>
                <h2>Upcoming</h2>
                <h2>Newly Launched</h2>

            </div>
        
            <div className="flex w-full h-64 gap-4">
                <div className="bg-white w-1/4 h-64">
                    <Link href="toyotacorolla">
                     <img src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/medium/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674" alt="Toyota Corolla" className=" h-48"></img>
                     <h3 className="text-blue-950 font-bold text-center">Toyota Corolla</h3>
                     <p className="text-green-500 text-center ">PKR 59.7 - 75.5 lacs</p>
                    </Link>
                </div>

                <div className="bg-white w-1/4 h-64">
                    <Link href="/suzukialto"><img src="https://cache4.pakwheels.com/system/car_generation_pictures/6013/medium/Suzuki_Alto_-_PNG.png?1635945100" alt="Suzuki Alto" className=" h-48"></img>
                     <h3 className="text-blue-950 font-bold text-center">Suzuki Alto</h3>
                     <p className="text-green-500 text-center ">PKR 23.3 - 30.5 lacs</p>
                    </Link>


                </div>

                <div className="bg-white w-1/4 h-64">
                    <Link href="/hondacity"><img src="https://cache1.pakwheels.com/system/car_generation_pictures/6425/medium/Honda_City_Front.jpg?1651424945" alt="Honda City" className=" h-48"></img>
                     <h3 className="text-blue-950 font-bold text-center">Honda City</h3>
                     <p className="text-green-500 text-center ">PKR 46.5 - 58.5 lacs</p>
                    </Link>

                </div>

                <div className="bg-white w-1/4 h-64">
                    <Link href="/hondacivic"><img src="https://cache4.pakwheels.com/system/car_generation_pictures/7370/medium/Cover.jpg?1677570254" alt="Honda Civic" className=" h-48"></img>
                     <h3 className="text-blue-950 font-bold text-center">Honda Civic</h3>
                     <p className="text-green-500 text-center ">PKR 86.6 - 99.0 lacs</p>
                    </Link>  

                </div>

            </div>

        </section>
        </>
    );
}