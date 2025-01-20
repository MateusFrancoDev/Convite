import { Righteous } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const fonte = Righteous({
  subsets: ['latin'],
  weight: "400",
});

export default function Logo() {
  return (
    <Link href="/" className={` flex items-center gap-2 ${fonte.className}`}>
      <Image src="/logo.svg" alt="Logo" width={60} height={60} />
      <h1 className=" flex flex-col items-center leading-5">
        <div>CONVITE</div>
        <div>DIGITAL</div>
      </h1>
    </Link>
  );
};