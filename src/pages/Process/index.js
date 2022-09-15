import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Text, Stack, Img } from "components";

const ProcessPage = () => {
  const navigate = useNavigate();

  function handleNavigate11() {
    navigate("/showcaseresults");
  }
  function handleNavigate12() {
    navigate("/registerpage");
  }
  function handleNavigate13() {
    navigate("/home1");
  }

  return (
    <>
      <Column
        className="common-pointer bg-gradient  border border-black_900 border-solid font-poppins justify-end mx-[auto] lg:pt-[36px] xl:pt-[41px] pt-[47px] 3xl:pt-[56px] shadow-bs w-[100%]"
        onClick={handleNavigate11}
      >
        <Row className="items-center 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] ml-[96px] mr-[auto] w-[67%]">
          <Text
            className="common-pointer font-normal not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
            onClick={handleNavigate13}
          >
            Metaverse
          </Text>
          <Text
            className="common-pointer font-normal lg:ml-[513px] xl:ml-[587px] ml-[660px] 3xl:ml-[792px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
            onClick={handleNavigate12}
          >
            Discover
          </Text>
        </Row>
        <Column className="items-center mt-[4px] w-[100%]">
          <Stack className="h-[1084px] 2xl:h-[1085px] 3xl:h-[1302px] lg:h-[844px] xl:h-[965px] w-[100%]">
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
            <Stack className="absolute bg-white_A700_b7 border-bw5 border-lime_900 border-solid 3xl:h-[1058px] lg:h-[686px] xl:h-[784px] h-[881px] 2xl:h-[882px] inset-x-[0] mx-[auto] top-[0] w-[89%]">
              <Img
                src="images/img_loadingbar1.png"
                className="absolute 3xl:h-[1058px] lg:h-[686px] xl:h-[784px] h-[881px] 2xl:h-[882px] w-[100%]"
                alt="LoadingBarOne"
              />
            </Stack>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default ProcessPage;
