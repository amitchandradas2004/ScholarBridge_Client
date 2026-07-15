"use client";

import type { Key } from "@heroui/react";

import {
  Autocomplete,
  Description,
  Label,
  ListBox,
} from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const degreeItems = [
  {
    id: "Undergraduate",
    name: "Undergraduate",
  },
  {
    id: "Master's",
    name: "Master's",
  },
  {
    id: "PhD",
    name: "PhD",
  },
];

export default function DegreeFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedKey, setSelectedKey] = useState<Key | null>(
    searchParams.get("degreeLevel")
  );

  const handleChange = (key: Key | null) => {
    setSelectedKey(key);

    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (key) {
      params.set("degreeLevel", key.toString());
    } else {
      params.delete("degreeLevel");
    }

    router.push(`/scholarships?${params.toString()}`);
  };

  return (
    <Autocomplete
      className="w-full"
      placeholder="All Degrees"
      selectionMode="single"
      value={selectedKey}
      onChange={handleChange}
    >
      <Label>Degree Level</Label>

      <Autocomplete.Trigger>
        <Autocomplete.Value />
        <Autocomplete.ClearButton />
        <Autocomplete.Indicator />
      </Autocomplete.Trigger>

      <Autocomplete.Popover>
        <ListBox>
          {degreeItems.map((item) => (
            <ListBox.Item
              key={item.id}
              id={item.id}
              textValue={item.name}
            >
              {item.name}
              <ListBox.ItemIndicator />
            </ListBox.Item>
          ))}
        </ListBox>
      </Autocomplete.Popover>

      <Description>
        Filter scholarships by degree level
      </Description>
    </Autocomplete>
  );
}