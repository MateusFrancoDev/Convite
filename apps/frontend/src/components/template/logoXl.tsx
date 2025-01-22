import { Righteous } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const fonte = Righteous({
  subsets: ['latin'],
  weight: "400",
});

export default function LogoXl() {
  return (
    <Link href="/" className={` flex flex-col items-center gap-2 ${fonte.className}`}>
      <Image src="/logo.svg" alt="Logo" width={100} height={100} />
      <h1 className="text-5xl">
        Convite Digital
      </h1>
    </Link>
  );
};