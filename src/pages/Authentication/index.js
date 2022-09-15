import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Text, Stack, Img, Line } from "components";

const AuthenticationPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/insertdiagram");
  }
  function handleNavigate2() {
    navigate("/registerpage");
  }
  function handleNavigate3() {
    navigate("/registerpage");
  }
  function handleNavigate4() {
    navigate("/home1");
  }
  function handleNavigate5() {
    navigate("/registerpage");
  }

  return (
    <>
      <Column className="bg-gradient  border border-black_900 border-solid font-poppins justify-end mx-[auto] lg:pt-[36px] xl:pt-[41px] pt-[47px] 3xl:pt-[56px] shadow-bs w-[100%]">
        <Row className="items-center 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] ml-[96px] mr-[auto] w-[67%]">
          <Text
            className="common-pointer font-normal not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
            onClick={handleNavigate4}
          >
            Metaverse
          </Text>
          <Text
            className="common-pointer font-normal lg:ml-[513px] xl:ml-[587px] ml-[660px] 3xl:ml-[792px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]"
            onClick={handleNavigate3}
          >
            Discover
          </Text>
        </Row>
        <Column className="font-abeezee items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
          <Stack className="xl:h-[1038px] h-[1166px] 2xl:h-[1167px] 3xl:h-[1401px] lg:h-[907px] w-[100%]">
            <Stack className="absolute 3xl:h-[1140px] lg:h-[739px] xl:h-[845px] h-[949px] 2xl:h-[950px] left-[0] top-[0] w-[94%]">
              <Stack className="absolute bg-gradient3  3xl:h-[1058px] lg:h-[686px] xl:h-[784px] h-[881px] 2xl:h-[882px] lg:pr-[46px] xl:pr-[53px] pr-[60px] 3xl:pr-[72px] right-[0] top-[0] w-[94%]">
                <Img
                  src="images/img_auth1.png"
                  className="absolute bottom-[0] lg:h-[445px] xl:h-[508px] h-[571px] 2xl:h-[572px] 3xl:h-[686px] left-[0] w-[38%]"
                  alt="authOne"
                />
                <div className="absolute bg-blue_800_19 lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] left-[23%] rounded-radius130 top-[6%] w-[21%]"></div>
              </Stack>
              <Column className="absolute bg-white_A700 border-bw5 border-lime_900 border-solid h-[max-content] inset-y-[0] my-[auto] lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px] right-[1%] w-[53%]">
                <Text className="font-normal lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-black_900 w-[auto]">
                  <span className="text-black_900 font-poppins">
                    Welcome <br />
                  </span>
                  <span className="text-black_900 text-[20px] font-poppins lg:text-[15px] xl:text-[17px] 3xl:text-[24px]">
                    Hi, glad to see you{" "}
                  </span>
                </Text>
                <Stack className="3xl:h-[104px] lg:h-[67px] xl:h-[77px] h-[86px] 2xl:h-[87px] lg:mt-[29px] xl:mt-[33px] mt-[38px] 3xl:mt-[45px] w-[98%]">
                  <div className="absolute bg-deep_purple_A200 3xl:h-[104px] lg:h-[67px] xl:h-[77px] h-[86px] 2xl:h-[87px] left-[2%] w-[98%]"></div>
                  <Stack className="absolute 3xl:h-[101px] lg:h-[66px] xl:h-[75px] h-[84px] 2xl:h-[85px] inset-[0] justify-center m-[auto] w-[97%]">
                    <Text
                      className="common-pointer absolute font-normal not-italic lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-white_A700 w-[auto]"
                      onClick={handleNavigate5}
                    >
                      CONTINUE WITH GOOGLE
                    </Text>
                    <Img
                      src="images/img_google1.png"
                      className="absolute lg:h-[47px] xl:h-[54px] h-[60px] 2xl:h-[61px] 3xl:h-[73px] inset-y-[0] left-[7%] my-[auto] w-[11%]"
                      alt="googleOne"
                    />
                  </Stack>
                </Stack>
                <Column className="lg:mb-[56px] xl:mb-[64px] mb-[72px] 3xl:mb-[86px] lg:ml-[10px] xl:ml-[11px] ml-[13px] 3xl:ml-[15px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[96%]">
                  <Line className="bg-black_900 h-[1px] ml-[2px] w-[99%]" />
                  <Text className="font-jejugothic font-normal lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:mt-[35px] xl:mt-[40px] mt-[46px] 3xl:mt-[55px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                    EMAIL
                  </Text>
                  <Column className="bg-gray_50 font-abeezee items-center 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:pl-[10px] xl:pl-[12px] pl-[14px] 3xl:pl-[16px] w-[100%]">
                  <input type="email" id="name" name="name" pattern=".+@globex\.com" required size={70}></input>
                  </Column>
                  <Row className="font-jejugothic items-end justify-between lg:ml-[4px] xl:ml-[5px] ml-[6px] 3xl:ml-[7px] lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] w-[99%]">
                    <Text className="font-normal lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                      PASSWORD
                    </Text>
                    <Text className="font-normal mb-[2px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900 w-[auto]">
                      FORGOT PASSWORD
                    </Text>
                  </Row>
                  <Stack className="font-abeezee lg:h-[62px] xl:h-[71px] h-[79px] 2xl:h-[80px] 3xl:h-[95px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[100%]">
                    <input type="password" id="name" name="name" required size={70}></input>

                  </Stack>
                  <Text
                    className="common-pointer bg-gray_500 font-abeezee font-normal justify-center lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] not-italic lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-white_A700 w-[576px]"
                    onClick={handleNavigate1}
                  >
                    LOGIN TO ACCOUNT
                  </Text>
                  <Text
                    className="common-pointer bg-green_100 font-abeezee font-normal justify-center lg:ml-[45px] xl:ml-[52px] ml-[59px] 3xl:ml-[70px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] not-italic pl-[2px] lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-white_A700 w-[576px]"
                    onClick={handleNavigate2}
                  >
                    CREATE ACCOUNT
                  </Text>
                </Column>
              </Column>
              <div className="absolute bg-blue_800_19 bottom-[0] lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] left-[0] rounded-radius128 w-[15%]"></div>
            </Stack>
            <div className="absolute bg-blue_800_19 bottom-[13%] lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] left-[5%] rounded-radius130 w-[18%]"></div>
            <div className="absolute bg-blue_800_19 bottom-[0] lg:h-[200px] xl:h-[228px] h-[256px] 2xl:h-[257px] 3xl:h-[308px] right-[0] rounded-radius128 w-[15%]"></div>
          </Stack>
        </Column>
      </Column>
    </>
  );
};

export default AuthenticationPage;
