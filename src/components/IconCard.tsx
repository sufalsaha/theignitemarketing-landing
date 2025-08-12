// src/components/IconCard.tsx

export default function IconCard({
  img,
  des,
  className,
}: {
  img: string;
  des: string;
  className: string;
}) {
  return (
    <div className="w-[149px] h-[148px] bg-[#FFFFFF] shadow-custom rounded-[17px] flex justify-center items-center hover:drop-shadow-2xl ">
      <div className="flex flex-col justify-center items-center gap-[6px]">
        <img src={img} alt="ClickUp" className={className} />
        <p className="text-[16px] font-normal text-[#121212] leading-[24px] ">
          {des}
        </p>
      </div>
    </div>
  );
}
