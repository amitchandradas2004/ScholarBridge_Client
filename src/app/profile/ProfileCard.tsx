"use client";
import { Scholarship, User } from "@/types/scholarship";
import { Calendar, Mail, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { FaUser, FaUserGraduate } from "react-icons/fa6";
interface ProfileCardProps {
  user: User;
  myScholarships: Scholarship[];
}
const ProfileCard = ({ user, myScholarships }: ProfileCardProps) => {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-28">
      <div className="mx-auto container">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">My Profile</h1>

          <p className="mt-2 text-slate-400">
            View and manage your account information.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">
          {/* Cover */}
          <div className="h-40 bg-linear-to-r from-indigo-700 via-indigo-600 to-cyan-600" />

          {/* Profile */}
          <div className="relative px-8 pb-8">
            <div className="-mt-16 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
              <div className="flex flex-col items-center gap-5 md:flex-row">
                <div className="relative flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-slate-900 bg-slate-800">
                  {user?.image ? (
                    <Image
                      src={user.image}
                      alt={user.name ?? "User"}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <FaUserGraduate className="h-16 w-16 text-slate-400" />
                  )}
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {user?.name || "Unknown User"}
                  </h2>

                  <p className="mt-1 text-slate-400">{user?.email}</p>
                </div>
              </div>

              {/* <Button className="cursor-pointer rounded-xl bg-indigo-700">
                Update Profile
              </Button> */}
            </div>

            {/* Information */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <div className="mb-5 flex items-center gap-3">
                  <FaUser className="text-indigo-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Personal Information
                  </h3>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-sm text-slate-500">Full Name</p>

                    <p className="mt-1 text-white">
                      {user?.name || "Not Provided"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Email Address</p>

                    <div className="mt-1 flex items-center gap-2 text-white">
                      <Mail size={16} className="text-indigo-400" />
                      {user?.email}
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                <div className="mb-5 flex items-center gap-3">
                  <ShieldCheck className="text-green-400" />
                  <h3 className="text-lg font-semibold text-white">
                    Account Information
                  </h3>
                </div>

                <div className="space-y-5">
                  <div>
                    <p className="text-sm text-slate-500">Email Verified</p>

                    <p
                      className={`mt-1 font-medium ${
                        user?.emailVerified ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {user?.emailVerified ? "Verified" : "Not Verified"}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">Account Status</p>

                    <div className="mt-1 flex items-center gap-2 text-green-400">
                      <Calendar size={16} />
                      Active
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics */}
            <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
                <h3 className="text-3xl font-bold text-indigo-400">
                  {myScholarships.length}
                </h3>
                <p className="mt-2 text-slate-400">Applications</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 text-center">
                <h3 className="text-3xl font-bold text-indigo-400">1</h3>
                <p className="mt-2 text-slate-400">Account</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileCard;
