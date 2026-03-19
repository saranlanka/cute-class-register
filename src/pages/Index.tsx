import ClassCard from "@/components/ClassCard";
import classBanner from "@/assets/class-banner.jpg";

const classes = ["CSE A", "CSE B", "CSE C", "CSE D"];

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <h1 className="text-4xl font-bold text-primary text-center mb-10">
        Our Lovable Classes
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {classes.map((cls) => (
          <ClassCard key={cls} name={cls} image={classBanner} />
        ))}
      </div>
    </div>
  );
};

export default Index;
