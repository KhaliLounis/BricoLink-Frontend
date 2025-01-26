import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AddRequestButtonProps {
  onClick: () => void;
}

export function AddRequestButton({ onClick }: AddRequestButtonProps) {
  return (
    <div className="fixed bottom-6 left-0 right-0 flex justify-center">
      <Button
        onClick={onClick}
        className="rounded-full bg-gradient-to-r from-[#5544B7] to-[#724FFF] text-white shadow-lg hover:shadow-xl transition-shadow duration-200"
        size="lg"
      >
        <Plus className="mr-2 h-5 w-5" />
        Add Request
      </Button>
    </div>
  );
}
