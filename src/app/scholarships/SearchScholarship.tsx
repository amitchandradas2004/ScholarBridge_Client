"use client";

import { Button, Label, SearchField } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SearchScholarship = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") ?? "");

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (search.trim()) {
      params.set("search", search.trim());
    } else {
      params.delete("search");
    }

    router.push(`/scholarships?${params.toString()}`);
  };

  return (
    <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end">
      <SearchField
        value={search}
        onChange={setSearch}
        onSubmit={handleSearch}
        className="flex-1"
      >
        <Label>Search By Scholarship Name and University Name </Label>

        <SearchField.Group>
          <SearchField.SearchIcon />

          <SearchField.Input
            className="w-full md:w-80"
            placeholder="Search scholarships..."
          />

          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      <Button
        onPress={handleSearch}
        type="submit"
        className="w-full md:w-35 bg-indigo-600"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchScholarship;
