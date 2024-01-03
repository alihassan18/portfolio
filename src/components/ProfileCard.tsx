import Image from "next/image";
import {
    FaPhone,
    FaLocationArrow,
    FaEnvelope,
    FaBirthdayCake,
    FaDownload,
} from "react-icons/fa";

const ProfileCard = () => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-pink-300 via-white to-blue-200 p-4 flex justify-center items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
                    {/* Image component for profile picture */}
                    <Image
                        src="/assets/images/profile-picture.jpeg" // Replace with the path to your image
                        alt="Profile Picture"
                        width={160}
                        height={160}
                        className="rounded-full"
                    />
                </div>
            </div>
            <div className="p-6">
                <h1 className="text-center text-2xl font-semibold mb-2">
                    Monalisa Ashley
                </h1>
                <p className="text-center text-gray-600 mb-6">UI/UX Designer</p>
                <div className="space-y-3">
                    <div className="flex items-center justify-center">
                        <FaPhone className="text-gray-500" />
                        <span className="ml-2">+123 456 7890</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <FaLocationArrow className="text-gray-500" />
                        <span className="ml-2">Hong Kong, China</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <FaEnvelope className="text-gray-500" />
                        <span className="ml-2">example@mail.com</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <FaBirthdayCake className="text-gray-500" />
                        <span className="ml-2">May 27, 1990</span>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                        <FaDownload className="mr-2" />
                        <span>Download CV</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
