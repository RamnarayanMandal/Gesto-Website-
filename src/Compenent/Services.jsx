import React from "react";
import { FaHandPointRight} from "react-icons/fa";
import ViewBtn from "./ViewBtn";




const Services = () => {
    let cards = [
        {
            url: "https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/s4-il-1.png",
            title: "Design & Development",
            description:
                "Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.",
        },
        {
            url: "https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/s4-il-2.png",
            title: "Design & Development",
            description:
                "Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.",
        },
        {
            url: "https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/s4-il-3.png",
            title: "Content Marketing",
            description:
                "Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.",
        },
        {
            url: "https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/s4-il-4.png",
            title: "Content Marketing",
            description:
                "Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.",
        },
        {
            url: "https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/s4-il-5.png",
            title: "Seo Audits & Strategy",
            description:
                "Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.",
        },
        {
            url: "https://themexriver.com/wp/gesto/wp-content/uploads/2023/11/s4-il-6.png",
            title: "Seo Audits & Strategy",
            description:
                "Lorem ipsum dolor sit amet bibendum elit sit finibus. Maximus sodales parturien lore arcu eros vel erat pede netus qu.",
        },
    ];

    // Divide the cards into subarrays of 3 elements each
    let rows = [];
    for (let i = 0; i < cards.length; i += 3) {
        rows.push(cards.slice(i, i + 3));
    }

    return (
        <div className="font-serif">
            <div className="flex justify-center content-center items-center text-orange-600 text-xl gap-4 my-4">
                <FaHandPointRight />
                <p>OUR BEST SERVICES</p>
            </div>
            <div>
                <h1 className="lg:text-5xl font-bold text-center my-4">
                    We Provide Best Services
                </h1>
            </div>
            <div className="my-4 mt-10 ">
                {rows.map((row, index) => (
                    <div
                        key={index}
                        className="flex flex-wrap gap-4 justify-evenly lg:my-10 overflow-hidden card-container"
                    >
                        {row.map((card, cardIndex) => (
                            <div
                                key={cardIndex}
                                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 bg-slate-100 border-inherit border-2 rounded-lg background hover:text-white hover:rotate-z-180 transform transition-transform card "
                            >
                                <div className="flex justify-center content-center items-center my-4 ">
                                    <div>
                                        <img className="rounded w-52 h-60" src={card.url} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <h1 className="text-center text-2xl font-semibold my-4 ">
                                        {card.title}
                                    </h1>
                                </div>
                                <div>
                                    <p className="text-xl my-4">{card.description}</p>
                                </div>
                                <div className="flex justify-center content-center items-center">
                                    <div className="flex h-10 w-10 ">
                                        <img className="bg-deep-orange-400 rounded-full p-1 hover:text-w" src="https://clipart-library.com/new_gallery/202-2027980_sideways-arrow-icon-small-arrow-icon-png.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            

                        ))}
                    </div>
                
                ))}

            </div>
            <div className="flex justify-center content-center items-center">
            <ViewBtn/>
            </div>
        </div>
    );
};

export default Services;
