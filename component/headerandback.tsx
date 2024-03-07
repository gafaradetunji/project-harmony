"use client";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import Link from "next/link";

const HeaderAndBack = ({
  title,
  className,
}: {
  title?: string;
  className?: string;
}) => {
  const router = useRouter();

  const handleBackClick = () => {
    const backUrl = router.back();
    if (backUrl !== undefined) {
      router.push(backUrl);
    } else {
      router.push("/");
    }
  };

  return (
    <Link
      href={``}
      onClick={handleBackClick}
      className="flex items-center gap-4 bg-black"
    >
      <IoIosArrowBack className="h-12 w-6" />
      {title && <h3 className="font-bold text-[1.9rem] font-lato">{title}</h3>}
    </Link>
  );
};

export default HeaderAndBack;
