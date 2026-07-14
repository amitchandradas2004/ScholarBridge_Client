"use client";

import { deleteScholarship } from "@/lib/actions/scholarship";
import { Scholarship } from "@/types/scholarship";
import { Button, Modal } from "@heroui/react";
import { AlertTriangle, Trash2 } from "lucide-react";
import toast from "react-hot-toast";

export function DeleteScholarshipModal({
  scholarship,
}: {
  scholarship: Scholarship;
}) {
  console.log(scholarship, "sss");
  const id = scholarship._id;
  const handleDelete = async () => {
    const res = await deleteScholarship(id);

    if (res.deletedCount === 1) {
      toast.success("Scholarship deleted successfully");
    } else {
      toast.error("Failed to delete scholarship");
    }
  };
  return (
    <Modal>
      <Modal.Trigger>
        <Button
          aria-label="Delete Scholarship"
          className="cursor-pointer rounded-xl border border-red-500/20 bg-red-500/10 p-2.5 text-red-400 transition-all duration-300 hover:scale-110 hover:border-red-400 hover:bg-red-500/20"
        >
          <Trash2 className="h-5 w-5" />
        </Button>
      </Modal.Trigger>

      <Modal.Backdrop variant="blur" className="bg-black/70 backdrop-blur-sm">
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-md overflow-hidden rounded-2xl border border-red-500/20 bg-zinc-950">
            <Modal.Header className="flex flex-col items-center gap-4 pt-8 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/15">
                <AlertTriangle className="h-8 w-8 text-red-500" />
              </div>

              <div>
                <Modal.Heading className="text-2xl font-bold text-white">
                  Delete Scholarship?
                </Modal.Heading>

                <p className="mt-2 text-sm text-zinc-400">
                  You are about to permanently delete this scholarship.
                </p>
              </div>
            </Modal.Header>

            <Modal.Body className="text-center">
              <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4">
                <p className="text-sm leading-7 text-red-200">
                  This action cannot be undone. Once deleted, the scholarship,
                  its information, and associated data will be permanently
                  removed from the system.
                </p>
              </div>
            </Modal.Body>

            <Modal.Footer className="flex gap-3">
              <Button
                slot="close"
                className="flex-1 border-zinc-700 text-white bg-slate-800"
              >
                Cancel
              </Button>

              <Button
                onClick={handleDelete}
                slot="close"
                className="flex-1 bg-red-600 text-white hover:bg-red-700"
              >
                Delete Scholarship
              </Button>
            </Modal.Footer>

            <Modal.CloseTrigger />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
