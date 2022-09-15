import React from "react";

import { Column, Row, Text, Stack, Img, Line } from "components";
import { useNavigate } from "react-router-dom";

const ShowcaseresultsPage = () => {
  const navigate = useNavigate();

  function handleNavigate16() {
    navigate("/registerpage");
  }
  function handleNavigate17() {
    navigate("/home1");
  }

  return (
    <>
      <Column className="bg-gradient  border border-black_900 border-solid font-poppins justify-end mx-[auto] lg:pt-[36px] xl:pt-[41px] pt-[47px] 3xl:pt-[56px] shadow-bs w-[100%]">
        <Row className="items-center 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] ml-[96px] mr-[auto] w-[67%]">
          <Text
            className="common-pointer font-normal not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
            onClick={handleNavigate17}
          >
            Metaverse
          </Text>
          <Text
            className="common-pointer font-normal lg:ml-[513px] xl:ml-[587px] ml-[660px] 3xl:ml-[792px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
            onClick={handleNavigate16}
          >
            Discover
          </Text>
        </Row>
        <Column className="items-center w-[100%]">
          <Stack className="h-[1088px] 2xl:h-[1089px] 3xl:h-[1307px] lg:h-[847px] xl:h-[968px] w-[100%]">
            <Stack className="absolute bottom-[0] 3xl:h-[1054px] lg:h-[683px] xl:h-[781px] h-[877px] 2xl:h-[878px] w-[100%]">
              <Row className="absolute justify-between w-[100%]">
                <Stack className="lg:h-[637px] xl:h-[728px] h-[818px] 2xl:h-[819px] 3xl:h-[983px] lg:mb-[45px] xl:mb-[52px] mb-[59px] 3xl:mb-[70px] w-[43%]">
                  <Row className="absolute left-[5%] top-[16%] w-[83%]">
                    <div className="bg-blue_800_19 lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] lg:mb-[146px] xl:mb-[167px] mb-[188px] 3xl:mb-[225px] rounded-radius130 w-[50%]"></div>
                    <div className="bg-blue_800_19 lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] lg:mt-[146px] xl:mt-[167px] mt-[188px] 3xl:mt-[225px] rounded-radius130 w-[50%]"></div>
                  </Row>
                  <div className="absolute bg-blue_800_19 lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] left-[0] rounded-radius128 top-[0] w-[29%]"></div>
                  <div className="absolute bg-blue_800_19 bottom-[0] lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] right-[0] rounded-radius130 w-[42%]"></div>
                </Stack>
                <div className="bg-blue_800_19 lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] lg:mt-[483px] xl:mt-[552px] mt-[621px] 3xl:mt-[745px] rounded-radius128 w-[9%]"></div>
              </Row>
              <div className="absolute bg-blue_800_19 bottom-[17%] lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] left-[14%] rounded-radius130 w-[18%]"></div>
            </Stack>
            <Column className="absolute bg-white_A700_b7 border-bw5 border-lime_900 border-solid inset-x-[0] justify-end mx-[auto] lg:p-[28px] xl:p-[32px] p-[37px] 3xl:p-[44px] top-[0] w-[89%]">
              <Stack className="font-poppins lg:h-[37px] xl:h-[42px] h-[47px] 2xl:h-[48px] 3xl:h-[57px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] w-[19%]">
                <Img
                  src="images/img_rectangle3.png"
                  className="absolute lg:h-[35px] xl:h-[41px] h-[45px] 2xl:h-[46px] 3xl:h-[55px] inset-x-[0] mx-[auto] top-[0] w-[97%]"
                  alt="RectangleThree"
                />
                <Text className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-black_900 w-[max-content]">
                  res
                </Text>
              </Stack>
              <Line className="bg-black_900 h-[1px] lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[96%]" />
              <Text className="bg-white_A700 border border-black_900 border-solid font-inter font-normal lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900 w-[1156px]">
                info
              </Text>
              <Stack className="font-inter lg:h-[41px] xl:h-[47px] h-[52px] 2xl:h-[53px] 3xl:h-[63px] lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] w-[96%]">
                <div className="absolute bg-white_A700 border border-black_900 border-solid lg:h-[41px] xl:h-[47px] h-[52px] 2xl:h-[53px] 3xl:h-[63px] right-[0] w-[100%]"></div>
                <Text className="absolute font-normal left-[2%] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
                  info
                </Text>
              </Stack>
              <Text className="bg-white_A700 border border-black_900 border-solid font-inter font-normal lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] not-italic lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900 w-[1156px]">
                info
              </Text>
              <Stack className="font-poppins lg:h-[35px] xl:h-[41px] h-[45px] 2xl:h-[46px] 3xl:h-[55px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] w-[19%]">
                <div className="absolute bg-white_A700 border-bw5 border-lime_900 border-solid lg:h-[35px] xl:h-[41px] h-[45px] 2xl:h-[46px] 3xl:h-[55px] left-[1%] w-[99%]"></div>
                <Text className="absolute font-normal not-italic right-[1%] lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-black_900 w-[auto]">
                  res
                </Text>
              </Stack>
              <Line className="bg-black_900 h-[1px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[96%]" />
              <Text className="bg-white_A700 border border-black_900 border-solid font-inter font-normal lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:pl-[21px] xl:pl-[24px] pl-[27px] 3xl:pl-[32px] lg:pt-[3px] xl:pt-[4px] pt-[5px] 3xl:pt-[6px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900 w-[1156px]">
                info
              </Text>
              <Stack className="font-inter lg:h-[41px] xl:h-[47px] h-[52px] 2xl:h-[53px] 3xl:h-[63px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] w-[96%]">
                <div className="absolute bg-white_A700 border border-black_900 border-solid lg:h-[41px] xl:h-[47px] h-[52px] 2xl:h-[53px] 3xl:h-[63px] right-[0] w-[100%]"></div>
                <Text className="absolute font-normal left-[2%] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
                  info
                </Text>
              </Stack>
              <Stack className="font-inter lg:h-[42px] xl:h-[48px] h-[53px] 2xl:h-[54px] 3xl:h-[64px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[96%]">
                <div className="absolute bg-white_A700 border border-black_900 border-solid bottom-[2%] lg:h-[41px] xl:h-[47px] h-[52px] 2xl:h-[53px] 3xl:h-[63px] w-[100%]"></div>
                <Text className="absolute font-normal h-[max-content] inset-[0] justify-center m-[auto] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900 w-[max-content]">
                  info
                </Text>
              </Stack>
              <Stack className="font-poppins lg:h-[36px] xl:h-[41px] h-[46px] 2xl:h-[47px] 3xl:h-[56px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mt-[23px] xl:mt-[26px] mt-[30px] 3xl:mt-[36px] w-[18%]">
                <div className="absolute bg-white_A700 border-bw5 border-lime_900 border-solid lg:h-[35px] xl:h-[41px] h-[45px] 2xl:h-[46px] 3xl:h-[55px] right-[0] top-[2%] w-[100%]"></div>
                <Text className="absolute bottom-[2%] font-normal left-[0] not-italic lg:text-[28px] xl:text-[32px] text-[36px] 3xl:text-[43px] text-black_900 w-[auto]">
                  res
                </Text>
              </Stack>
              <Line className="bg-black_900 h-[1px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[96%]" />
              <Text className="bg-white_A700 border border-black_900 border-solid font-inter font-normal lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] not-italic lg:pl-[21px] xl:pl-[24px] pl-[27px] 3xl:pl-[32px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900 w-[1156px]">
                info
              </Text>
              <Text className="bg-white_A700 border border-black_900 border-solid font-inter font-normal lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mt-[16px] xl:mt-[18px] mt-[21px] 3xl:mt-[25px] not-italic lg:pl-[21px] xl:pl-[24px] pl-[27px] 3xl:pl-[32px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900 w-[1156px]">
                info
              </Text>
            </Column>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default ShowcaseresultsPage;
