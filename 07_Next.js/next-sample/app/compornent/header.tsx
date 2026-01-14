import Image from "next/image";
import Link from "next/link";

const Header = () =>{
    return(
        <header>
         <Link href='/'>
         <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        </Link>
        </header>
    )

};

export default Header;
