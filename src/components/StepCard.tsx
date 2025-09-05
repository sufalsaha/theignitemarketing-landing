interface StepCardProps {
  number: number;
  description: string;
  image: string;
}

export default function StepCard({
  number,
  description,
  image,
}: StepCardProps) {
  return (
    <div className="bg-gradient-to-r min-h-[500px] from-[#fdf5f7] to-[#f0f4fb] rounded-lg p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border">
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <div className="text-[80px] text-[#e2e2e2] font-bold leading-none -mb-6">
          {number}
        </div>
        <p className="text-[#374151] text-lg md:text-xl font-medium mt-2">
          {description}
        </p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img src={image} alt="Step illustration" className="max-w-[250px] " />
      </div>
    </div>
  );
}
