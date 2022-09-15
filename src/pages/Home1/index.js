import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Text, Stack, Img } from "components";

const Home1Page = () => {
  const navigate = useNavigate();

  function handleNavigate6() {
    navigate("/registerpage");
  }
  function handleNavigate14() {
    navigate("/authentication");
  }

  return (
    <>
      <Column className="bg-gradient2  font-poppins justify-end mx-[auto] lg:pr-[21px] xl:pr-[24px] pr-[28px] 3xl:pr-[33px] lg:pt-[21px] xl:pt-[24px] pt-[28px] 3xl:pt-[33px] w-[100%]">
        <Row className="items-center 3xl:ml-[108px] lg:ml-[70px] xl:ml-[80px] ml-[90px] mr-[auto] w-[71%]">
          <Text className="font-normal not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
            Metaverse
          </Text>
          <Text
            className="common-pointer font-normal lg:ml-[543px] xl:ml-[621px] ml-[699px] 3xl:ml-[839px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
            onClick={handleNavigate6}
          >
            Discover
          </Text>
        </Row>
        <Column className="items-center mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[147px] xl:mt-[169px] mt-[190px] 3xl:mt-[228px] w-[99%]">
          <Row className="items-center justify-between w-[100%]">
            <Stack className="lg:h-[596px] xl:h-[682px] h-[766px] 2xl:h-[767px] 3xl:h-[920px] w-[57%]">
              <Stack className="absolute bottom-[0] lg:h-[508px] xl:h-[581px] h-[653px] 2xl:h-[654px] 3xl:h-[785px] w-[100%]">
                <Stack className="absolute lg:h-[508px] xl:h-[581px] h-[653px] 2xl:h-[654px] 3xl:h-[785px] w-[100%]">
                  <Img
                    src="images/img_accueilillu1.png"
                    className="absolute bottom-[0] lg:h-[432px] xl:h-[494px] h-[555px] 2xl:h-[556px] 3xl:h-[667px] left-[0] w-[94%]"
                    alt="accueililluOne"
                  />
                  <div className="absolute bg-blue_800_19 lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] right-[0] rounded-radius130 top-[0] w-[33%]"></div>
                </Stack>
                <div className="absolute bg-blue_800_19 lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] right-[21%] rounded-radius130 top-[13%] w-[33%]"></div>
              </Stack>
              <div className="absolute bg-blue_800_19 lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] right-[21%] rounded-radius130 top-[0] w-[33%]"></div>
            </Stack>
            <Column className="w-[38%]">
              <Text className="font-normal not-italic lg:text-[49px] xl:text-[56px] text-[64px] 3xl:text-[76px] text-shadow-ts text-white_A700 w-[auto]">
                Easy as ever
              </Text>
              <Column
                className="common-pointer bg-blue_800 font-jejugothic items-center lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] mt-[4px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] w-[56%]"
                onClick={handleNavigate14}
              >
                <Text className="font-normal leading-[normal] lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-center text-white_A700 w-[100%]">
                  Join Now
                </Text>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default Home1Page;
