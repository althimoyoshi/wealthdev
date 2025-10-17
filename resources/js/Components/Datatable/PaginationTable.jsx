import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/Components/ui/pagination";
import { cn } from "@/lib/utils";

export default function PaginationTable({ meta, links }) {
  return (
    <Pagination>
      <PaginationContent className="flex flex-wrap justify-center lg:justify-end">
        <PaginationItem>
          <PaginationPrevious
            className={cn('mb-1', !links.prev && 'cursor-not-allowed opacity-50')}
            href={links.prev || '#'}
          />
        </PaginationItem>

        {meta?.links?.slice(1, -1).map((link, index) => (
          <PaginationItem key={index} className="lg:mb-0 mx-1 mb-1">
            <PaginationLink
              href={link.url || '#'}
              isActive={link.active}
              className={cn(
                'transition-all duration-200',
                link.active && 'bg-lime-500 text-white hover:bg-lime-600',
              )}
            >
              {link.label}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            className={cn('mb-1', !links.next && 'cursor-not-allowed opacity-50')}
            href={links.next || '#'}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}