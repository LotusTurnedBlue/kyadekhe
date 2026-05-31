import Image from "next/image";
import Link from "next/link";

export default function BrandLogo() {
  return (
    <Link
      href="/"
      className="inline-flex select-none"
      aria-label="Go to homepage"
    >
      <Image
        src="/tobenamed.png"
        alt="KyaDekhe?"
        width={1440}
        height={460}
        priority
        className="h-[46px] md:h-[57.5px] w-[144px] md:w-[180px]"
      />
    </Link>
  );
}