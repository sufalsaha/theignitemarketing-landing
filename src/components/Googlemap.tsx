import ster from "../assets/icon/star-fill.svg";

export default function GoogleMap() {
  return (
    <section className="flex justify-center bg-[#F9F9F9]">
      <div className="max-w-[1440px] w-full ">
        <div className="px-[112px] py-[112px]">
          <div>
            <div className="flex flex-col justify-center items-center gap-[40px] ">
              <h3 className="text-[40px] font-semibold text-[#2E3138] leading-[64px]  ">
                Our location
              </h3>

              <div className="flex gap-[20px] ">
                <div className="bg-[#fff] border border-[#E8E8E8] rounded-[8px] p-[12px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4083.284344403767!2d73.07596197628105!3d33.72243553507222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf8308ecc255%3A0x7060e58f1e852b66!2sGreen%20Trust%20Tower!5e1!3m2!1sen!2sbd!4v1756718472866!5m2!1sen!2sbd"
                    width="100%"
                    height="450"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>

                  <div className=" w-full p-[24px] bg-[#fff]  flex flex-col gap-[13px] ">
                    <h3 className="text-[24px] font-medium text-[#121212]  ">
                      Islamabad Office
                    </h3>
                    <p className="text-[18px] font-normal text-[#5F6572] leading-[28px]   ">
                      11, Green Trust Tower, Office No 1 Floor, F 6/1 Blue Area,
                      Islamabad, 44000, Pakistan
                    </p>
                    <div className="flex gap-[8px] items-center ">
                      <p className="text-[16px] font-semibold text-[#2E3138] leading-[24px] ">
                        4.5
                      </p>
                      <div className="flex gap-[6px] ">
                        <img
                          src={ster}
                          alt="star"
                          className="w-[20px] h-[20px] "
                        />
                        <img
                          src={ster}
                          alt="star"
                          className="w-[20px] h-[20px] "
                        />
                        <img
                          src={ster}
                          alt="star"
                          className="w-[20px] h-[20px] "
                        />
                        <img
                          src={ster}
                          alt="star"
                          className="w-[20px] h-[20px] "
                        />
                        <img
                          src={ster}
                          alt="star"
                          className="w-[20px] h-[20px] "
                        />
                      </div>
                      <p className="ml-[4px] text-[16px] font-medium text-[#3C87EB] leading-[24px] ">
                        (11 reviews)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#fff] border border-[#E8E8E8] rounded-[8px] p-[12px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4448.046841314211!2d55.18052237605085!3d25.03676823817886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6da7e9fc9149%3A0xddf5aae046fe3037!2sGAL%20Business%20Center%20-%20Serviced%20Offices%20%26%20Coworking%20Spaces%20in%20Dubai!5e1!3m2!1sen!2sbd!4v1756718687630!5m2!1sen!2sbd"
                    width="600"
                    height="450"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className=" w-full p-[24px] bg-[#fff]  flex flex-col gap-[13px] ">
                    <h3 className="text-[24px] font-medium text-[#121212]  ">
                      Islamabad Office
                    </h3>
                    <p className="text-[18px] font-normal text-[#5F6572] leading-[28px]   ">
                      11, Green Trust Tower, Office No 1 Floor, F 6/1 Blue Area,
                      Islamabad, 44000, Pakistan
                    </p>
                    <div className="flex gap-[8px] items-center ">
                      <p className="text-[16px] font-semibold text-[#2E3138] leading-[24px] ">
                        4.5
                      </p>
                      <div className="flex gap-[6px] ">
                        <img
                          src={ster}
                          alt="star"
                          className="w-[20px] h-[20px] "
                        />
                        <img
                          src={ster}
                          alt="star"
                          className="w-[20px] h-[20px] "
                        />
                        <img
                          src={ster}
                          alt="star"
                          className="w-[20px] h-[20px] "
                        />
                        <img
                          src={ster}
                          alt="star"
                          className="w-[20px] h-[20px] "
                        />
                        <img
                          src={ster}
                          alt="star"
                          className="w-[20px] h-[20px] "
                        />
                      </div>
                      <p className="ml-[4px] text-[16px] font-medium text-[#3C87EB] leading-[24px] ">
                        (11 reviews)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="max-w-[429px] w-full p-[24px] bg-[#fff] border border-[#E8E8E8] rounded-[8px] flex flex-col gap-[13px] ">
                <h3 className="text-[24px] font-medium text-[#121212]  ">
                  Riyadh & Kuwait
                </h3>
                <p className="text-[18px] font-normal text-[#DE5EA3] leading-[28px]   ">
                  Coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
