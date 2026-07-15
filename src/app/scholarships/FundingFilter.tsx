"use client";

import type { Key } from "@heroui/react";

import { Autocomplete, Description, Label, ListBox } from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const fundingItems = [
  {
    id: "Fully Funded",
    name: "Fully Funded",
  },
  {
    id: "Partially Funded",
    name: "Partially Funded",
  },
  {
    id: "Self Funded",
    name: "Self Funded",
  },
];

export default function FundingFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedKey, setSelectedKey] = useState<Key | null>(
    searchParams.get("fundingType"),
  );

  const handleChange = (key: Key | null) => {
    setSelectedKey(key);

    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (key) {
      params.set("fundingType", key.toString());
    } else {
      params.delete("fundingType");
    }

    router.push(`/scholarships?${params.toString()}`);
  };

  return (
    <Autocomplete
      className="w-full"
      placeholder="All Funding Type"
      selectionMode="single"
      value={selectedKey}
      onChange={handleChange}
    >
      <Label>Funding Type</Label>

      <Autocomplete.Trigger>
        <Autocomplete.Value />
        <Autocomplete.ClearButton />
        <Autocomplete.Indicator />
      </Autocomplete.Trigger>

      <Autocomplete.Popover>
        <ListBox>
          {fundingItems.map((item) => (
            <ListBox.Item key={item.id} id={item.id} textValue={item.name}>
              {item.name}
              <ListBox.ItemIndicator />
            </ListBox.Item>
          ))}
        </ListBox>
      </Autocomplete.Popover>

      <Description>Filter scholarships by Funding Type</Description>
    </Autocomplete>
  );
}
