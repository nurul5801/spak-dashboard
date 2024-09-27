import { Protest_Guerrilla, Akshar } from 'next/font/google';
import Image from 'next/image'; // For the logo image

const protestGuerrilla = Protest_Guerrilla({
  subsets: ['latin'],
  weight: ['400'],
});
const akshar = Akshar({
  subsets: ['latin'],
  weight: ['400'],
});

function Header({ isConnected, batteryStatus }) { // Corrected here
  return (
    <div className="sticky top-0 left-0 right-0 z-10 flex items-center h-[70px] bg-white shadow px-5">
      {/* Logo */}
      <div className="p-0 m-0">
        <Image 
          src="/spakpnglogo.png" // Replace with your logo path
          alt="Logo"
          width={100} // Adjust as needed for responsiveness
          height={100} // Adjust as needed for responsiveness
          className="object-contain" // Ensures the logo scales correctly
        />
      </div>

      {/* Centered Title */}
      <div className="flex-1 flex justify-center">
        <p className={`${protestGuerrilla.className} text-black font-bold text-4xl md:text-6xl`}>
          SPAK
        </p>
      </div>

      {/* Top-right icons */}
      <div className="flex items-center space-x-3">
        <i className={`fas fa-circle ${isConnected ? 'text-green-500' : 'text-red-500'}`} title={isConnected ? 'Connected' : 'Disconnected'}></i>
        <p className={`${akshar.className} text-lg`}>{isConnected ? 'Connected' : 'Disconnected'}</p>
        {isConnected && (
          <>
            <i className="fas fa-battery-full text-gray-600 text-[40px]"></i>
            <p className={`${akshar.className} text-lg`}>{batteryStatus} %</p> {/* Corrected here */}
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
