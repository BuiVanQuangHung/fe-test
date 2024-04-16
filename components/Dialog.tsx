import { Post } from "@/app/postManagement/page";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import React from "react";

interface CustomDialogProps {
  isOpen: boolean;
  onClose: () => void;
  data?: Post;
}
const CustomDialog = (props: CustomDialogProps) => {
  const { data, isOpen, onClose } = props;
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col w-[500px] h-[300px] items-start justify-center">
        <p className="font-bold">Detail</p>
        <p>ID: {data?.id}</p>
        <p>UserID: {data?.userId}</p>
        <p>Title: {data?.title}</p>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
