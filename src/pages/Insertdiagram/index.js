import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Text, Stack, Line, Img, Button } from "components";

const InsertdiagramPage = () => {
  const navigate = useNavigate();

  function handleNavigate7() {
    navigate("/registerpage");
  }
  function handleNavigate8() {
    navigate("/home1");
  }
  function handleNavigate9() {
    navigate("/process");
  }

  return (
    <>
      <Column className="bg-gradient  border border-black_900 border-solid font-poppins justify-end mx-[auto] lg:pt-[36px] xl:pt-[41px] pt-[47px] 3xl:pt-[56px] shadow-bs w-[100%]">
        <Row className="items-center 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] ml-[96px] mr-[auto] w-[67%]">
          <Text
            className="common-pointer font-normal not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
            onClick={handleNavigate8}
          >
            Metaverse
          </Text>
          <Text
            className="common-pointer font-normal lg:ml-[513px] xl:ml-[587px] ml-[660px] 3xl:ml-[792px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
            onClick={handleNavigate7}
          >
            Discover
          </Text>
        </Row>
        <Column className="font-inter items-center mt-[4px] w-[100%]">
          <Stack className="lg:h-[2861px] xl:h-[3272px] h-[3678px] 2xl:h-[3681px] 3xl:h-[4417px] w-[100%]">
            <Stack className="absolute lg:h-[2861px] xl:h-[3272px] h-[3678px] 2xl:h-[3681px] 3xl:h-[4417px] w-[100%]">
              <Stack className="absolute h-[1084px] 2xl:h-[1085px] 3xl:h-[1302px] lg:h-[844px] xl:h-[965px] top-[0] w-[100%]">
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
                <Column className="absolute bg-white_A700_b7 border-bw5 border-lime_900 border-solid inset-x-[0] mx-[auto] lg:p-[29px] xl:p-[33px] p-[38px] 3xl:p-[45px] top-[0] w-[89%]">
                  <Text className="font-normal lg:ml-[20px] xl:ml-[23px] ml-[26px] 3xl:ml-[31px] lg:mt-[34px] xl:mt-[39px] mt-[44px] 3xl:mt-[52px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
                    Upload Files
                  </Text>
                  <Line className="bg-black_900 h-[1px] lg:ml-[20px] xl:ml-[23px] ml-[26px] 3xl:ml-[31px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[98%]" />
                  <Row className="justify-end lg:mb-[35px] xl:mb-[40px] mb-[45px] 3xl:mb-[54px] ml-[auto] lg:mt-[59px] xl:mt-[67px] mt-[76px] 3xl:mt-[91px] w-[92%]">
                    <Stack className="bg-orange_50 border-black_900 border-bw3 border-dashed lg:h-[454px] xl:h-[519px] h-[583px] 2xl:h-[584px] 3xl:h-[701px] lg:px-[40px] xl:px-[46px] px-[52px] 3xl:px-[62px] w-[45%]">
                      <Img
                        src="images/img_upload1.png"
                        className="absolute lg:h-[119px] xl:h-[137px] h-[153px] 2xl:h-[154px] 3xl:h-[184px] inset-x-[0] mx-[auto] top-[12%] w-[52%]"
                        alt="uploadOne"
                      />
                      <Text className="absolute bottom-[20%] font-normal inset-x-[0] leading-[normal] mx-[auto] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 text-center w-[99%]">
                        <span className="text-black_900 font-inter">
                          Drop files to upload
                          <br />
                          or{" "}
                        </span>
                        <span className="text-gray_600 font-inter">browse</span>
                      </Text>
                    </Stack>
                    <div className="bg-gray_200 border border-black_900 border-solid lg:h-[305px] xl:h-[348px] h-[391px] 2xl:h-[392px] 3xl:h-[470px] lg:mb-[149px] xl:mb-[170px] mb-[192px] 3xl:mb-[230px] lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] w-[48%]"></div>
                    <Line className="bg-bluegray_100 lg:h-[33px] xl:h-[38px] h-[42px] 2xl:h-[43px] 3xl:h-[51px] lg:mb-[352px] xl:mb-[402px] mb-[453px] 3xl:mb-[543px] ml-[3px] 3xl:mt-[105px] lg:mt-[68px] xl:mt-[78px] mt-[88px] w-[2px]" />
                  </Row>
                </Column>
              </Stack>
              <Column className="absolute bottom-[0] right-[11%] w-[35%]">
                <Column
                  className="common-pointer bg-deep_purple_A201 font-inter items-center lg:mr-[156px] xl:mr-[178px] mr-[201px] 3xl:mr-[241px] pr-[4px] w-[60%]"
                  onClick={handleNavigate9}
                >
                  
                  <Text className="font-normal leading-[normal] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[100%]">
                    Upload
                  </Text>
                </Column>
                
              </Column>
            </Stack>
            <Column className="absolute bg-gray_100 items-center right-[10%] top-[20%] w-[11%]">
              <Text className="font-normal leading-[normal] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 text-center w-[100%]">
                Cancel
              </Text>
            </Column>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default InsertdiagramPage;
