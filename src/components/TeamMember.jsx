import { Card, Flex, Image, Text, useTheme } from "@aws-amplify/ui-react";
import { FaLinkedin } from "react-icons/fa";

export default function TeamMember({
  name,
  about,
  picture,
  position,
  linkedin,
}) {
  const { tokens } = useTheme();

  return (
    <Card variation="elevated" padding="1.5rem 1.5rem" borderRadius={"1rem"}>
      <Flex direction="column" alignItems="flex-start">
        <Image
          src={picture}
          borderRadius="1rem"
          alt={name}
          height="100%"
          width="100%"
          style={{ aspectRatio: 1 }}
          objectFit="cover"
        />
        <Flex
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Flex direction="column" gap={0} flex={1}>
            <Text as="span" fontSize="1.1rem" fontWeight="semibold">
              {name}
            </Text>
            <Text as="span" opacity={0.9} fontSize="0.9rem" fontWeight="medium">
              {position}
            </Text>
          </Flex>
          {linkedin ? (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginRight: "0.5rem",
                color: tokens.colors.font.primary,
              }}
            >
              <FaLinkedin />
            </a>
          ) : (
            ""
          )}
        </Flex>
        <Text as="span">{about}</Text>
      </Flex>
    </Card>
  );
}
