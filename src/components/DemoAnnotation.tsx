
import { Info } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface DemoAnnotationProps {
  children: React.ReactNode;
  className?: string;
}

const DemoAnnotation = ({ children, className = "" }: DemoAnnotationProps) => {
  return (
    <Card className={`bg-slate-100 border-l-4 border-l-blue-500 shadow-sm mb-4 ${className}`}>
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-slate-700 italic leading-relaxed">
            {children}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DemoAnnotation;
