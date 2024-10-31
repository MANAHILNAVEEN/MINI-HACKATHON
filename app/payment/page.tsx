import Link from "next/link";
export default function Payment(){
    return(
        <div>
            <h1 className="text-5xl font-semibold text-center uppercase" >Enter your details </h1>

        <div>
            <form className="flex mt-10 gap-5 justify-center flex-col items-center bg-slate-500 h-96">
                <input type="email" className="py-2 px-3 rounded-2xl w-2/5 border border-red-400"
                placeholder="Entre your Email" required />
                 <input type="Account number" className="py-2 px-3 rounded-2xl w-2/5 border border-red-400"
                placeholder="Entre your Account Number" required />
                 <input type="CVV" className="py-2 px-3 rounded-2xl w-2/5 border border-red-400"
                placeholder="CVV" required />
                 <input type="Password" className="py-2 px-3 rounded-2xl w-2/5 border border-red-400"
                placeholder="Entre your Password" required />
                <Link href="/thankyou"> <button className="py-3 px-7 rounded-lg bg-blue-950 font-serif text-white">
                place your order</button> </Link>
               
                </form>
                </div>
                </div>           
    );
}