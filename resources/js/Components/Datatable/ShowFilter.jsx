import { Separator } from "@/Components/ui/separator";
import { Badge } from "@/Components/ui/badge";
import { cn } from "@/lib/utils";
import { Filter as IconFilter } from "lucide-react"; // atau dari @tabler/icons-react

export default function ShowFilter({ params, className = '' }) {
  return (
    <div className="py-4">
      {Object.keys(params).some((key) => params[key]) && (
        <div
          className={cn(
            'flex w-full flex-wrap items-center gap-y-2 bg-muted p-3 rounded-lg',
            className
          )}
        >
          <span className="flex items-center gap-1 text-sm font-medium text-foreground">
            <IconFilter className="size-4 text-lime-500" />
            Filters:
          </span>

          <Separator orientation="vertical" className="mx-3 h-6 bg-border" />

          {Object.entries(params).map(
            ([key, value]) =>
              value && (
                <Badge key={key} variant="outline" className="mr-2 text-sm">
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                </Badge>
              )
          )}
        </div>
      )}
    </div>
  );
}