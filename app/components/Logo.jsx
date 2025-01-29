import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="max-w-[100px] md:max-w-[165px] rounded-full"
        src="/logo.webp"
        alt="Logo Image"
        height={60}
        width={80}
      />
    </Link>
  );
};

export default Logo;
