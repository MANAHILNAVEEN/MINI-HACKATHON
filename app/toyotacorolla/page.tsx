
import Link from "next/link";
export default function ToyotaCorolla(){
    return(
        <div>
            <div className="text-center">
               <div className="text-white text-5xl font-bold py-2">Toyota corolla </div>

               <div className="flex justify-center items-center py-10 px-10">
                <img src="https://cache1.pakwheels.com/system/car_generation_pictures/5361/medium/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674" 
                alt="Toyota corolla" width={420} className="border-black"></img>
               </div>
               <div className="flex justify-center items-center gap-3 py-2 px-2">
               < button className="text-blue-700 bg-white rounded-lg border-blue-800 hover:bg-blue-600">
                Book a test drive</button>
               < button className="text-blue-700 bg-white rounded-lg border-blue-800 hover:bg-blue-600">
                Request bank finance</button>
               < button className="text-blue-700 bg-white rounded-lg border-blue-800 hover:bg-blue-600">
                Visit place</button>
               < button className="text-blue-700 bg-white rounded-lg border-blue-800 hover:bg-blue-600">
                Car inspection</button>
               </div>
               <div className="flex justify-center font-bold text-2xl">
                     Vehicle Discription
               </div>
               <div>
                <p><b>Number of door</b> 4 <b>Enginee</b> 1800CC <b>Condition</b> 8.5 / 10 
                <b>Driven</b> 9,500KM <b>Suspension type</b>Soft suspension <b>Avg</b> 13km per ltr 
                <b>Transmission</b> Automatic <b>Fuel type</b>High octane</p>
               </div>
               <div className="text-3xl text-green-500 font-semibold py-2 px-2">
                <span>
                    PKR 75,50,000
                </span>
               </div>
               <button className="bg-blue-600 text-black rounded-3xl py-2 px-2">
                <Link href="/payment">
                Make Payment</Link>
               </button>
            </div>
        </div>
    );
}