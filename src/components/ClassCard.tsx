import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface ClassCardProps {
  name: string;
  image: string;
}

const ClassCard = ({ name, image }: ClassCardProps) => {
  const [form, setForm] = useState({ name: "", phone: "", percentage: "" });

  const handleEnroll = () => {
    if (!form.name || !form.phone || !form.percentage) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success(`Successfully enrolled in ${name}!`);
    setForm({ name: "", phone: "", percentage: "" });
  };

  return (
    <div className="bg-card rounded-2xl p-6 shadow-md w-[260px] text-center space-y-3">
      <img src={image} alt={name} className="w-full h-28 object-cover rounded-xl" />
      <h3 className="text-lg font-bold text-foreground">{name}</h3>
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
      <Button onClick={handleEnroll} className="w-full mt-2">
        Enroll
      </Button>
    </div>
  );
};

export default ClassCard;
