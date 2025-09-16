import Image from "next/image";
import MobbinLogo from "/public/image/mobbin-logo.png";
import KreaLogo from "/public/image/Krea-logo-white.png";

function Footer() {
  return (
    <footer className="border-t border-base-300 bg-black/70">
      <div className="container mx-auto text-base-100 flex h-16 items-center justify-between px-4">

        {/*  */}
        <div className="flex items-center space-x-2">
          <div className="bg-black px-1 py-0.5 rounded-lg flex justify-center items-center">
            <Image src={KreaLogo} alt="Krea AI" width={16} height={16} />
          </div>
          <span>Krea AI</span>
        </div>

        {/* Curated By Section */}
        <div className="flex items-center space-x-2 text-sm text-base-100">
          <span>curated by</span>
          <div className="flex items-center">
           <Image src={MobbinLogo} alt="Mobbin" width={100} height={100} />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer
