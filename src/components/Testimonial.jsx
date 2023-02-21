import { Card, Flex, Image, Text } from "@aws-amplify/ui-react";

export default function Testimonial({ content, author, position }) {
  return (
    <Card
      variation="elevated"
      padding="1.5rem 2rem"
      borderRadius={"1rem"}
      className="transition-shadow-300"
    >
      <Flex direction="column" alignItems="flex-start">
        <Text as="span">{content}</Text>

        <Flex direction="row">
          <Image
            src="/images/1.jpeg"
            borderRadius="100%"
            alt={author}
            height="3rem"
            width="3rem"
            objectFit="cover"
          />
          <Flex direction="column" gap={0}>
            <Text>{author}</Text>
            {position && (
              <Text opacity={0.7} fontSize="0.9rem">
                {position}
              </Text>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
