import { ArrowLeft } from "lucide-react";

interface BackProps {
  className?: string;
}

const Back: React.FC<BackProps> = ({ className }) => {
  return (
    <button
      onClick={() => window.history.back()}
      className={`flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors absolute top-6 left-6 z-50 ${className ?? ''}`}
    >
      <ArrowLeft className="w-4 h-4" />
      Back
    </button>
  );
};

export default Back;