import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import * as XLSX from "xlsx";

interface ClassCardProps {
  name: string;
  image: string;
}

interface EnrollmentData {
  Name: string;
  Phone: string;
  Percentage: string;
  Class: string;
}

const allEnrollments: EnrollmentData[] = [];

const downloadExcel = () => {
  const ws = XLSX.utils.json_to_sheet(allEnrollments);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Enrollments");
  XLSX.writeFile(wb, "enrollments.xlsx");
};

const ClassCard = ({ name, image }: ClassCardProps) => {
  const [form, setForm] = useState({ name: "", phone: "", percentage: "" });
  const [open, setOpen] = useState(false);

  const handleEnroll = () => {
    if (!form.name || !form.phone || !form.percentage) {
      toast.error("Please fill all fields");
      return;
    }
    allEnrollments.push({
      Name: form.name,
      Phone: form.phone,
      Percentage: form.percentage,
      Class: name,
    });
    downloadExcel();
    toast.success(`Enrolled in ${name}! Excel downloaded.`);
    setForm({ name: "", phone: "", percentage: "" });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="bg-card rounded-2xl p-6 shadow-md w-[260px] text-center cursor-pointer hover:shadow-lg transition-shadow">
          <img src={image} alt={name} className="w-full h-28 object-cover rounded-xl" />
          <h3 className="text-lg font-bold text-foreground mt-3">{name}</h3>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[380px]">
        <DialogHeader>
          <DialogTitle className="text-primary">Enroll in {name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-3 mt-2">
          <Input
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border-primary/50 focus-visible:ring-primary"
          />
          <Input
            placeholder="Phone Number"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="border-primary/50 focus-visible:ring-primary"
          />
          <Input
            placeholder="Percentage"
            value={form.percentage}
            onChange={(e) => setForm({ ...form, percentage: e.target.value })}
            className="border-primary/50 focus-visible:ring-primary"
          />
          <Button onClick={handleEnroll} className="w-full">
            Enroll
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ClassCard;
