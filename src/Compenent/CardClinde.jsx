import {
    Card as MaterialCard,
    CardHeader,
    CardBody,
} from "@material-tailwind/react";
import { PiStarThin } from "react-icons/pi";

export function CardClined() {
    return (
        <MaterialCard className="w-full h-80 font-serif bg-gray-50 overflow-hidden">
            <div className="flex gap-10 content-center items-center">

                <div className="1/2">
                    <img className="w-full h-60 object-cover "
                        src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/gto-t5-img-2.png"
                        alt="card-image"
                    />
                </div>


                <div className="w-1/2">
                    <div className="text-orange-500 flex gap-2 my-4 text-3xl">
                        <PiStarThin /> <PiStarThin /> <PiStarThin /> <PiStarThin /><PiStarThin />
                    </div>
                    <h1 className="text-xl font-semibold">
                        “With Over A Decade Of Experie, We’ve Established Ourselves As One
                        Of The Pioneering Agencies In The Region. Our Small, Flexible, Agile
                        And Design-Led Structures & Processes”
                    </h1>
                </div>
                
             </div> 
               <hr className="mb-4"/>
                <div className="px-10 flex justify-between">
                    <h1 className="text-xl font-semibold">
                    FINANCE SPECIALIST
                    </h1>
                    <p className=" text-sm ">
                    ESTHER HOWARD
                    </p>
                </div>   
        </MaterialCard>
    );
}
