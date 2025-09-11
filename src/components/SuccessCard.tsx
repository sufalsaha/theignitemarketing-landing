import cadeIcon1 from "../assets/allimg/Background+Shadow (3).svg";
import cadeIcon2 from "../assets/allimg/Background+Shadow (4).svg";
import cadeIcon3 from "../assets/allimg/Background+Shadow (5).svg";
import arrow1 from "../assets/allimg/Arrow 2.svg";
import arrow2 from "../assets/allimg/Arrow 3.svg";

export default function SuccessCard() {
  return (
    <div>
      <section className="flex justify-center bg-[#fff]">
        <div className=" w-full ">
          <div className="py-[40px] lg:py-[112px] ">
            <div className="mb-[60px] px-[20px] md:px-[50px]  xl:px-[112px] ">
              <h2 className="text-[32px] leading-[48px] md:text-[48px] md:leading-[64px]  font-semibold text-[#121212] md:text-center ">
                We understand your industry. <br /> We’ve done it before.
              </h2>
            </div>

            <div className="h-[200px] md:h-[300px] xl:h-[500px] py-[20px] md:py-[50px] xl:py-[100px]">
              <div className=" relative max-w-[100vw] w-full">
                <div className="-rotate-[7.1deg] absolute left-1/2 -translate-x-[44vw] 2xl:-translate-x-[670px] 2xl:top-[30px] top-[10px] md:top-[30px] w-[33vw]  2xl:w-[500px] hover:rotate-[0deg] hover:z-20 transition duration-400 ease-in-out hover:scale-105">
                  <img
                    src={cadeIcon1}
                    alt="cadeIcon1"
                    className="object-fill w-full"
                  />
                </div>

                <div className="rotate-[5.32deg] absolute left-1/2 top-0 -translate-x-1/2 z-10 w-[33vw] 2xl:w-[500px] hover:rotate-[0deg] transition duration-400 ease-in-out hover:scale-105">
                  <img
                    src={cadeIcon2}
                    alt="cadeIcon1"
                    className="object-fill w-full"
                  />
                </div>

                <div className="rotate-[-11.13deg] absolute left-1/2 translate-x-[12vw] 2xl:translate-x-[200px] top-0 w-[33vw] 2xl:w-[500px] hover:rotate-[0deg] hover:z-20 transition duration-400 ease-in-out hover:scale-105">
                  <img
                    src={cadeIcon3}
                    alt="cadeIcon1"
                    className="object-fill  w-full"
                  />
                </div>

                <div className="absolute left-1/2 top-[23vw] 2xl:top-[340px] -translate-x-[20vw]  2xl:-translate-x-[260px]  w-[15vw] 2xl:w-[230px]  ">
                  <img
                    src={arrow1}
                    alt="arrow1"
                    className="object-fill w-full"
                  />
                </div>

                <div className="absolute left-1/2 top-[-5vw] 2xl:top-[-50px] translate-x-[7vw]  w-[15vw] 2xl:w-[230px]  ">
                  <img src={arrow2} alt="arrow2" className="object-cover " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
