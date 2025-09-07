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
    <div className="w-[53.43px] h-[53.06px] md:w-[90px] md:h-[90px] xl:w-[149px] xl:h-[148px] bg-[#FFFFFF] shadow-custom rounded-[6.11px] xl:rounded-[17px] flex justify-center items-center hover:drop-shadow-2xl ">
      <div className="flex flex-col justify-center items-center gap-[6px]">
        <img src={img} alt="ClickUp" className={className} />
        <p className="text-[5.70px] leading-[8.6px] md:text-[10px] md:leading-[12px] xl:text-[16px] xl:leading-[24px] font-normal text-[#121212]  ">
          {des}
        </p>
      </div>
    </div>
  );
}
