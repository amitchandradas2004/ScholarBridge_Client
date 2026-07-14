"use client";
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Popover,
} from "react-aria-components";

import { AddScholarshipSkeleton } from "@/components/Skeletons/AddScholarshipSkeleton";
import { postScholarShip } from "@/lib/actions/scholarship";
import { authClient } from "@/lib/auth-client";
import { ScholarshipData } from "@/types/scholarship";
import {
  Button,
  DatePicker,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";
import {
  Building2,
  CalendarClock,
  CalendarDays,
  DollarSign,
  FileText,
  Globe2,
  GraduationCap,
  ImageIcon,
  Layers,
  Link2,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const inputClass =
  "w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-base text-slate-50 placeholder-slate-400 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40";

const triggerClass =
  "w-full rounded-xl border border-slate-600 bg-slate-800 px-4 py-2.5 text-base text-slate-50 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40";

const labelClass =
  "text-sm font-medium text-slate-300 mb-1.5 flex items-center gap-2";

const AddScholarshipPage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const userEmail = user?.email;

  if (isPending) {
    return <AddScholarshipSkeleton />;
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const allFormData = Object.fromEntries(formData.entries());

    const scholarshipData: ScholarshipData = {
      scholarshipName: allFormData.scholarshipName as string,
      universityName: allFormData.universityName as string,
      countryName: allFormData.countryName as string,
      degreeLevel: allFormData.degreeLevel as string,
      fundingType: allFormData.fundingType as string,
      deadline: allFormData.deadline as string,
      amount: allFormData.amount as string,
      officialLink: allFormData.officialLink as string,
      bannerImage: allFormData.bannerImage as string,
      description: allFormData.description as string,
      postedBy: userEmail as string,
    };
    const res = await postScholarShip(scholarshipData);
    if (res.insertedId) {
      toast.success(
        <div>
          <h2 className="font-heading text-lg font-bold">Scholarship Added</h2>

          <p className="font-body mt-1 text-sm opacity-80">
            Your scholarship has been added successfully. You can view it in
            your scholarships page.
          </p>
        </div>,
        {
          icon: "🎉",
        },
      );
      router.push("/myScholarships");
      return;
    }

    toast.error(
      <div>
        <h2 className="font-heading text-lg font-bold">
          Error Adding Scholarship
        </h2>

        <p className="font-body mt-1 text-sm opacity-80">
          Something went wrong while adding your scholarship.
        </p>
      </div>,
      {
        icon: "❌",
      },
    );
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 relative overflow-hidden py-5">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-slate-600/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-linear(circle_at_1px_1px,rgba(148,163,184,0.07)_1px,transparent_0)] bg-size-[32px_32px]" />

      <div className="relative mt-20 flex justify-center px-4 pb-20">
        <div className="w-full max-w-xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
              <GraduationCap size={14} />
              New Listing
            </span>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50">
              Add a Scholarship
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Share the details so students can find and apply with confidence.
            </p>
          </div>

          {/* Glass card */}
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Scholarship name */}
              <div>
                <TextField
                  isRequired
                  className="w-full"
                  name="scholarshipName"
                  type="text"
                  variant="secondary"
                >
                  <Label className={labelClass}>
                    <GraduationCap size={15} className="text-indigo-400" />
                    Scholarship Name
                  </Label>
                  <Input
                    placeholder="e.g. MEXT Scholarship"
                    className={inputClass}
                  />
                </TextField>
              </div>

              {/* University */}
              <div>
                <TextField
                  isRequired
                  className="w-full"
                  name="universityName"
                  type="text"
                  variant="secondary"
                >
                  <Label className={labelClass}>
                    <Building2 size={15} className="text-indigo-400" />
                    University
                  </Label>
                  <Input
                    placeholder="Enter university name"
                    className={inputClass}
                  />
                </TextField>
              </div>

              {/* Country */}
              <div>
                <TextField
                  isRequired
                  className="w-full"
                  name="countryName"
                  type="text"
                  variant="secondary"
                >
                  <Label className={labelClass}>
                    <Globe2 size={15} className="text-indigo-400" />
                    Country
                  </Label>
                  <Input
                    placeholder="Enter country name"
                    className={inputClass}
                  />
                </TextField>
              </div>

              {/* Degree level */}
              <div className="w-full">
                <Select
                  isRequired
                  className="w-full"
                  name="degreeLevel"
                  placeholder="Select Degree Level"
                >
                  <Label className={labelClass}>
                    <Layers size={15} className="text-indigo-400" />
                    Degree Level
                  </Label>

                  <Select.Trigger
                    className={`${triggerClass} flex h-11 w-full items-center justify-between rounded-xl border border-slate-600 bg-slate-800 px-3 text-slate-100`}
                  >
                    <Select.Value>
                      {({ selectedText }) => (
                        <span className="block flex-1 truncate text-left text-slate-100">
                          {selectedText || "Select Degree Level"}
                        </span>
                      )}
                    </Select.Value>

                    <Select.Indicator className="ml-2 shrink-0 text-slate-300" />
                  </Select.Trigger>

                  <Select.Popover className="w-[--trigger-width] rounded-xl border border-slate-700 bg-slate-800 shadow-xl">
                    <ListBox className="max-h-64 overflow-y-auto p-1">
                      <ListBox.Item
                        id="undergraduate"
                        textValue="Undergraduate"
                        className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-slate-100 transition hover:bg-slate-700"
                      >
                        Undergraduate
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item
                        id="masters"
                        textValue="Master's"
                        className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-slate-100 transition hover:bg-slate-700"
                      >
                        Master's
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item
                        id="phd"
                        textValue="PhD"
                        className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-slate-100 transition hover:bg-slate-700"
                      >
                        PhD
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Funding Type */}
              <div className="w-full">
                <Select
                  isRequired
                  className="w-full"
                  name="fundingType"
                  placeholder="Select Funding Type"
                >
                  <Label className={labelClass}>
                    <Wallet size={15} className="text-indigo-400" />
                    Funding Type
                  </Label>

                  <Select.Trigger
                    className={`${triggerClass} flex h-11 w-full items-center justify-between rounded-xl border border-slate-600 bg-slate-800 px-3 text-slate-100`}
                  >
                    <Select.Value>
                      {({ selectedText }) => (
                        <span className="block flex-1 truncate text-left text-slate-100">
                          {selectedText || "Select Funding Type"}
                        </span>
                      )}
                    </Select.Value>

                    <Select.Indicator className="ml-2 shrink-0 text-slate-300" />
                  </Select.Trigger>

                  <Select.Popover className="w-[--trigger-width] rounded-xl border border-slate-600 bg-slate-800 shadow-xl">
                    <ListBox className="max-h-64 overflow-y-auto p-1">
                      <ListBox.Item
                        id="full"
                        textValue="Fully Funded"
                        className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-slate-100 transition hover:bg-slate-700"
                      >
                        Fully Funded
                        <ListBox.ItemIndicator />
                      </ListBox.Item>

                      <ListBox.Item
                        id="partial"
                        textValue="Partially Funded"
                        className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 text-slate-100 transition hover:bg-slate-700"
                      >
                        Partially Funded
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Deadline */}
              <div className="w-full">
                <DatePicker className="w-full" name="deadline" isRequired>
                  <Label className={labelClass}>
                    <CalendarClock size={15} className="text-indigo-400" />
                    Deadline
                  </Label>

                  <div className="flex">
                    <Group
                      className={`${inputClass} flex h-11 w-full items-center justify-between rounded-xl border border-slate-600 bg-slate-800 px-3`}
                    >
                      <DateInput className="flex flex-1">
                        {(segment) => (
                          <DateSegment
                            segment={segment}
                            className="rounded px-0.5 text-slate-100 outline-none focus:bg-indigo-500/20"
                          />
                        )}
                      </DateInput>

                      <Button className="ml-2 rounded-md p-1 text-slate-300 transition hover:bg-slate-700 hover:text-white">
                        <CalendarDays size={18} />
                      </Button>
                    </Group>
                  </div>

                  <Popover className="z-50 rounded-xl border border-slate-600 bg-slate-800 p-2 shadow-xl">
                    <Dialog>
                      <Calendar>
                        <header className="mb-2 flex items-center justify-between">
                          <Button slot="previous">←</Button>

                          <Heading className="font-semibold text-slate-100" />

                          <Button slot="next">→</Button>
                        </header>

                        <CalendarGrid>
                          {(date) => (
                            <CalendarCell
                              date={date}
                              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-md text-slate-100 transition hover:bg-indigo-600 data-selected:bg-indigo-600"
                            />
                          )}
                        </CalendarGrid>
                      </Calendar>
                    </Dialog>
                  </Popover>
                </DatePicker>
              </div>

              {/* Amount */}
              <div>
                <TextField
                  isRequired
                  className="w-full"
                  name="amount"
                  type="number"
                  variant="secondary"
                >
                  <Label className={labelClass}>
                    <DollarSign size={15} className="text-indigo-400" />
                    Amount
                  </Label>
                  <Input placeholder="Enter amount" className={inputClass} />
                </TextField>
              </div>

              {/* Official Link */}
              <div>
                <TextField
                  isRequired
                  className="w-full"
                  name="officialLink"
                  type="url"
                  variant="secondary"
                >
                  <Label className={labelClass}>
                    <Link2 size={15} className="text-indigo-400" />
                    Official Link
                  </Label>
                  <Input placeholder="https://" className={inputClass} />
                </TextField>
              </div>

              {/* Banner Image */}
              <div>
                <TextField
                  isRequired
                  className="w-full"
                  name="bannerImage"
                  type="url"
                  variant="secondary"
                >
                  <Label className={labelClass}>
                    <ImageIcon size={15} className="text-indigo-400" />
                    Banner Image (URL only)
                  </Label>
                  <Input placeholder="https://" className={inputClass} />
                </TextField>
              </div>

              {/* Description */}
              <div className="flex flex-col">
                <Label className={labelClass}>
                  <FileText size={15} className="text-indigo-400" />
                  Description
                </Label>
                <TextArea
                  required
                  aria-label="Description of the Scholarship"
                  className={`h-32 ${inputClass}`}
                  placeholder="Tell us about the scholarship — coverage, eligibility, and what makes it worth applying for."
                  name="description"
                />
              </div>

              {/* Actions */}
              <div className="mt-2 flex items-center justify-end gap-3 border-t border-slate-800/80 pt-6">
                <Link href="/">
                  {" "}
                  <Button
                    slot="close"
                    variant="secondary"
                    className="rounded-xl border border-slate-600 bg-transparent px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 cursor-pointer"
                  >
                    Cancel
                  </Button>
                </Link>
                <Button
                  type="submit"
                  className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-600/30 transition-colors hover:bg-indigo-500 cursor-pointer"
                >
                  Submit Scholarship
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddScholarshipPage;
