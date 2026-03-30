export type SortMetadata = {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
};

export type PageableMetadata = {
  pageNumber: number;
  pageSize: number;
  sort: SortMetadata;
  offset: number;
  paged: boolean;
  unpaged: boolean;
};

export type PageResponse<T> = {
  content: T[];
  pageable: PageableMetadata;
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  sort: SortMetadata;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};
