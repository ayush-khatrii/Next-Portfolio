import { Heading, Hr, Text } from "@react-email/components";

export const Email = ({ fromName, fromEmail, content }) => {
  return (
    <>
      <Heading as="h2" className="capitalize">
        {fromName} - {fromEmail}
      </Heading>
      <Hr />
      <Text>{content}</Text>
    </>
  )
};
