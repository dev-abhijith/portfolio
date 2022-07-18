import React from "react";
import { Box, Stack, chakra, Flex, Icon } from "@chakra-ui/react";

function Skills() {
  return (
    <Flex
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={{
        base: "0",
        md: "20",
      }}
      w="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        py={12}
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
        rounded="xl"
      >
        <Box
          maxW="7xl"
          mx="auto"
          px={{
            base: 4,
            lg: 8,
          }}
        >
          <Box
            textAlign={{
              lg: "center",
            }}
          >
            <chakra.h2
              _light={{
                color: "brand.600",
              }}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Skills
            </chakra.h2>
            <chakra.p
              mt={2}
              fontSize={{
                base: "3xl",
                sm: "4xl",
              }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              _light={{
                color: "gray.900",
              }}
            >
              Tech i am familiar with
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{
                lg: "auto",
              }}
              color="gray.500"
              _dark={{
                color: "gray.400",
              }}
            >
              Learning new tech is always fun and challenging, but beyond
              frameworks and languages, i believe what matters the most is the
              ability to build innovative systems to solve the problem
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{
                base: 10,
                md: 0,
              }}
              display={{
                md: "grid",
              }}
              gridTemplateColumns={{
                md: "repeat(2,1fr)",
              }}
              gridColumnGap={{
                md: 8,
              }}
              gridRowGap={{
                md: 10,
              }}
            >
              <Feature
                title="JavaScript"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                }
              >
                JavaScript, often abbreviated JS, is a programming language that
                is one of the core technologies of the World Wide Web, alongside
                HTML and CSS. As of 2022, 98% of websites use JavaScript on the
                client side for web page behavior, often incorporating
                third-party libraries.
              </Feature>

              <Feature
                title="CSS"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                }
              >
                Cascading Style Sheets is a style sheet language used for
                describing the presentation of a document written in a markup
                language such as HTML or XML. CSS is a cornerstone technology of
                the World Wide Web, alongside HTML and JavaScript.
              </Feature>

              <Feature
                title="HTML"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                }
              >
                The HyperText Markup Language or HTML is the standard markup
                language for documents designed to be displayed in a web
                browser. It can be assisted by technologies such as Cascading
                Style Sheets and scripting languages such as JavaScript.
              </Feature>

              <Feature
                title="React"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                }
              >
                React is a free and open-source front-end JavaScript library for
                building user interfaces based on UI components. It is
                maintained by Meta and a community of individual developers and
                companies.
              </Feature>
              <Feature
                title="Vue"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                }
              >
                Vue.js is an open-source model–view–viewmodel front end
                JavaScript framework for building user interfaces and
                single-page applications. It was created by Evan You, and is
                maintained by him and the rest of the active core team members.
              </Feature>
              <Feature
                title="Svelte"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                }
              >
                Svelte is a free and open-source front end compiler created by
                Rich Harris and maintained by the Svelte core team members
              </Feature>
              <Feature
                title="Python"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"
                  />
                }
              >
                Python is a high-level, interpreted, general-purpose programming
                language. Its design philosophy emphasizes code readability with
                the use of significant indentation. Python is dynamically-typed
                and garbage-collected.
              </Feature>
              <Feature
                title="Django"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"
                  />
                }
              >
                Django is a free and open-source, Python-based web framework
                that follows the MVC architectural pattern. It is maintained by
                the Django Software Foundation, an independent organization
                established in the US as a 501 non-profit.
              </Feature>
              <Feature
                title="Flask"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"
                  />
                }
              >
                Flask is a micro web framework written in Python. It is
                classified as a microframework because it does not require
                particular tools or libraries. It has no database abstraction
                layer, form validation, or any other components where
                pre-existing third-party libraries provide common functions.
              </Feature>
              <Feature
                title="FastAPI"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"
                  />
                }
              >
                FastAPI is a Web framework for developing RESTful APIs in
                Python. FastAPI is based on Pydantic and type hints to validate,
                serialize, and deserialize data, and automatically auto-generate
                OpenAPI documents. It fully supports asynchronous programming
                and can run with Uvicorn and Gunicorn.
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

const Feature = (props) => {
  return (
    <Flex>
      <Flex shrink={0}>
        <Flex
          alignItems="center"
          justifyContent="center"
          h={12}
          w={12}
          rounded="md"
          _light={{
            bg: "teal",
          }}
          color="white"
        >
          <Icon
            boxSize={6}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {props.icon}
          </Icon>
        </Flex>
      </Flex>
      <Box ml={4}>
        <chakra.dt
          fontSize="lg"
          fontWeight="medium"
          lineHeight="6"
          _light={{
            color: "gray.900",
          }}
        >
          {props.title}
        </chakra.dt>
        <chakra.dd
          mt={2}
          color="gray.500"
          _dark={{
            color: "gray.400",
          }}
        >
          {props.children}
        </chakra.dd>
      </Box>
    </Flex>
  );
};

export default Skills;
