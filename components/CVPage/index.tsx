import { Box, Button, Container, Flex, Stack, Text } from "@chakra-ui/react";
import Certifications from "components/Certifications";
import Education from "components/Education";
import Section from "components/Section";
import Stacks from "components/Stacks";
import Timeline from "components/Timeline";
import { FcDownload } from "react-icons/fc";
import { downloadHandler } from "services/handler/handlerAPI";
import { generateRandomLightColor } from "services/utils/fun";

export default function CVPage() {
  const onDownloadClick = () => {
    downloadHandler()
      .then((res) => {
        window.open(res);
      })
      .catch((error) => alert(JSON.stringify(error)));
  };

  return (
    <Box bg="white">
      <Section>
        <Container maxWidth="4xl">
          <Flex
            flexDirection={["column", "row"]}
            justifyContent="space-between"
            alignItems={["flex-start", "center"]}
          >
            <Text fontWeight="bold" fontSize={[24, 36, 48]}>
              Curriculum Vitae
            </Text>
            <Button variant="outline" onClick={onDownloadClick}>
              <Text mr="10px">Download</Text>
              <FcDownload />
            </Button>
          </Flex>
        </Container>
        <Container maxWidth="4xl" mt="30px">
          <Stack spacing="5">
            <Stack direction="row" spacing="4" align="center" id="experiences">
              <Text fontWeight="bold" fontSize="16px" letterSpacing="3px">
                EXPERIENCES
              </Text>
              <Box h="3px" w="45px" bg="black" />
            </Stack>
            <Stack position="relative">
              <Timeline
                dateText="Mar 2024 - Sep 2024"
                bgCard={generateRandomLightColor()}
              >
                <Text fontWeight="bold">INSPIRO - Mobile Developer</Text>
                <Text>
                  - Engineered modules in the Pruforce Pulse app using Agile methodologies, optimizing performance and scalability in a manner
									consistent with modern React component design.
                  <br />- Diagnosed and resolved issues in both existing and new modules while maintaining accurate version control with Git.
                  <br />- Collaborated with vendors to extend functionality using React Native, demonstrating skills transferable to React applications in
									full-stack development.
									<br />- Delivered robust, high-quality code for iOS and Android platforms with a focus on performance optimization and adherence to mobile
									best practices.
                </Text>
              </Timeline>
              <Timeline
                dateText="Jan 2022 - May 2023"
                bgCard={generateRandomLightColor()}
              >
                <Text fontWeight="bold">DIGITSENSE LTD - Mobile Developer</Text>
                <Text>
                  - Constructed the Myrlabs app using React Native to ensure cross-platform functionality and responsive design, complementing web
									development practices in React.
                  <br />- Conducted thorough client requirement analyses and provided actionable recommendations, aligning with Agile methodologies for
									iterative development.
                  <br />- Supported team efforts in developing web applications by applying mobile development insights to enhance UI responsiveness and
									user experience.
									<br />- Performed comprehensive testing and documentation to ensure application reliability, incorporating unit testing practices with tools
									like Jest and Vitest.
                </Text>
              </Timeline>
              <Timeline
                dateText="Mar 2020 - Des 2021"
                bgCard={generateRandomLightColor()}
              >
                <Text fontWeight="bold">
                  PT TRUCKKING LINTAS SARANA - Mobile Developer
                </Text>
                <Text>
                  - Build TruckkingDriver app to track and monitoring status
                  update when driver delivering the package (version 1 & version
                  2).
                  <br />- Pair Programmer to build Truckking web based
                  application and Vendor Management System web based.
                  <br />- Socialize The Truck Driver and Operation how to use
                  app, what’s do and don’t, receive any bugs/error, then fixing
                </Text>
              </Timeline>
              <Timeline
                dateText="Jun 2019 – Feb 2020"
                bgCard={generateRandomLightColor()}
              >
                <Text fontWeight="bold">PERTAMINA UNIVERSITY - Programmer</Text>
                <Text>
                  - Build MONAS (Monitoring Asset) application, android based.
                  <br />- Build Employee Attendance Application with Face
                  Recognition feature.
                  <br />- Not only build, i socialize the use of application to
                  the office boy (for MONAS)
                  <br />- Receive any complaint, bugs. error and fixing
                </Text>
              </Timeline>

              <Timeline
                dateText="Jan 2018 – Dec 2018"
                bgCard={generateRandomLightColor()}
              >
                <Text fontWeight="bold">
                  PT JASARAHARJA PUTERA - Administration & IT Support
                </Text>
                <Text>
                  - Input/Process/Provide client registered data
                  <br />- IT Support at Kelapa Gading Branch office. Make sure
                  that IT Pheriperal work well during working hours.
                  <br />- Help manage asset stock (paper, policy, receipt,
                  operational needs, etc.) at Kelapa Gading branch office.
                </Text>
              </Timeline>
            </Stack>
          </Stack>
        </Container>
      </Section>

      <Education />
      <Certifications />
      <Stacks />
    </Box>
  );
}
