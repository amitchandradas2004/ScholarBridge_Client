"use client";

import type { Key } from "@heroui/react";

import { Autocomplete, EmptyState, Label, ListBox } from "@heroui/react";
import { ArrowDownUp } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const sortOptions = [
  {
    id: "latest",
    name: "Latest Added",
  },
  {
    id: "oldest",
    name: "Oldest Added",
  },
  {
    id: "amount-desc",
    name: "Highest Amount",
  },
  {
    id: "amount-asc",
    name: "Lowest Amount",
  },
  {
    id: "deadline-asc",
    name: "Nearest Deadline",
  },
  {
    id: "name-asc",
    name: "Scholarship Name",
  },
];

const SortScholarship = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") ?? "";

  const [selectedKey, setSelectedKey] = useState<Key | null>(
    currentSort || null,
  );

  const handleChange = (key: Key | null) => {
    setSelectedKey(key);

    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (key) {
      params.set("sort", String(key));
    } else {
      params.delete("sort");
    }

    router.push(`/scholarships?${params.toString()}`);
  };

  return (
    <Autocomplete
      className="w-full "
      placeholder="Sort Scholarships"
      selectionMode="single"
      value={selectedKey}
      onChange={handleChange}
    >
      <Label className="mb-2 flex items-center gap-2 text-slate-300">
        <ArrowDownUp size={16} />
        Sort By
      </Label>

      <Autocomplete.Trigger className="rounded-xl border border-slate-700 bg-slate-900">
        <Autocomplete.Value />
        <Autocomplete.ClearButton />
        <Autocomplete.Indicator />
      </Autocomplete.Trigger>

      <Autocomplete.Popover className="rounded-xl border border-slate-700 bg-slate-900">
        <ListBox
          renderEmptyState={() => <EmptyState>No sorting options</EmptyState>}
        >
          {sortOptions.map((option) => (
            <ListBox.Item
              key={option.id}
              id={option.id}
              textValue={option.name}
              className="cursor-pointer rounded-lg px-3 py-2 hover:bg-slate-800"
            >
              {option.name}
              <ListBox.ItemIndicator />
            </ListBox.Item>
          ))}
        </ListBox>
      </Autocomplete.Popover>
    </Autocomplete>
  );
};

export default SortScholarship;
