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
        src="/kyadekhe-logo.png"
        alt="KyaDekhe?"
        width={1414}
        height={370}
        priority
        className="h-auto w-[141px] md:w-[176.75px]"
      />
    </Link>
  );
}