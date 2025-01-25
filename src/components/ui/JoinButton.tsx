import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoMdPeople } from "react-icons/io";

const JoinButton = () => {
  return (
    <Link href="/register">
      <Button className="bg-gradient-to-b from-[#5544B7] to-[#724FFF] border border-white text-white hover:bg-purple-400/30">
        Join <IoMdPeople className="ml-2" />
      </Button>
    </Link>
  );
};

export default JoinButton;
