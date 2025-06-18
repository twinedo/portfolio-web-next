import { Box, Button, Container, Flex, Stack, Text } from "@chakra-ui/react";
import Section from "components/Section";
import Timeline from "components/Timeline";
import Link from "next/link";
import { generateRandomLightColor } from "services/utils/fun";
import styles from "styles/Home.module.css";

export default function Experiences() {
  return (
    <Box bg="white">
      <Section>
        <Container maxWidth="4xl">
          <Stack spacing={5}>
            <Stack direction="row" spacing="4" align="center">
              <Text fontWeight="bold" fontSize="16px" letterSpacing="3px">
                EXPERIENCES
              </Text>
              <Box h="3px" w="45px" bg="black" />
            </Stack>

            <Stack position="relative">
              <Timeline
                dateText="Nov 2024 - May 2025"
                bgCard={generateRandomLightColor()}
              >
                <Text fontWeight="bold">Abersoft - Mobile Developer</Text>
                <Text>
                  - Engineered modules in the Venga app, optimizing performance
                  and scalability in a manner consistent with modern React
                  Native component design.
                  <br />- Resolve issue , bug, and unmatch features on app
                  <br />- Planning what's best, what should remove, giving a
                  presentation the progress
                  <br />- Delivered robust, high-quality code for iOS and
                  Android platforms with a focus on performance optimization and
                  adherence to mobile best practices.
                </Text>
              </Timeline>
              <Timeline
                dateText="Mar 2024 - Sep 2024"
                bgCard={generateRandomLightColor()}
              >
                <Text fontWeight="bold">INSPIRO - Mobile Developer</Text>
                <Text>
                  - Engineered modules in the Pruforce Pulse app using Agile
                  methodologies, optimizing performance and scalability in a
                  manner consistent with modern React component design.
                  <br />- Diagnosed and resolved issues in both existing and new
                  modules while maintaining accurate version control with Git.
                  <br />- Collaborated with vendors to extend functionality
                  using React Native, demonstrating skills transferable to React
                  applications in full-stack development.
                  <br />- Delivered robust, high-quality code for iOS and
                  Android platforms with a focus on performance optimization and
                  adherence to mobile best practices.
                </Text>
              </Timeline>
              <Timeline
                dateText="Jan 2022 - May 2023"
                bgCard={generateRandomLightColor()}
              >
                <Text fontWeight="bold">DigitSense Ltd - Mobile Developer</Text>
                <Text>
                  - Constructed the Myrlabs app using React Native to ensure
                  cross-platform functionality and responsive design,
                  complementing web development practices in React.
                  <br />- Conducted thorough client requirement analyses and
                  provided actionable recommendations, aligning with Agile
                  methodologies for iterative development.
                  <br />- Supported team efforts in developing web applications
                  by applying mobile development insights to enhance UI
                  responsiveness and user experience.
                  <br />- Performed comprehensive testing and documentation to
                  ensure application reliability, incorporating unit testing
                  practices with tools like Jest and Vitest.
                </Text>
              </Timeline>

              <Flex
                direction="row"
                columnGap={5}
                alignItems="center"
                justifyContent="center"
                maxWidth="4xl"
                bg="rgba(255, 255, 255, 0.9)"
                py="20px"
              >
                <Link href="/cv#experiences">
                  <Button
                    bg="black"
                    px="20px"
                    py="10px"
                    borderRadius={8}
                    cursor="pointer"
                    _hover={{
                      boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                    }}
                  >
                    <Text
                      className={styles.textBody}
                      fontSize={12}
                      color="white"
                    >
                      View More
                    </Text>
                  </Button>
                </Link>
              </Flex>
            </Stack>
          </Stack>
        </Container>
      </Section>
    </Box>
  );
}
