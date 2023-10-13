// CollapsibleSection.tsx

import { Box, Button, Collapse, VStack, Text, Link } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

function CollapsibleSection({ subCategory }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <VStack align="start" spacing={3}>
      <Button leftIcon={isOpen ? "V" : "T"} variant="ghost" onClick={onToggle} colorScheme="blue">
        {subCategory.displayName}
      </Button>
      <Collapse in={isOpen}>
        <VStack align="start" spacing={2}>
          {subCategory.links.map((link, linkIndex) => (
            <Link key={linkIndex} isExternal href={link.url} color="blue.600">
              <Text fontWeight="bold">{link.displayName}</Text>
              <Text>{link.shortDescription}</Text>
              {link.description && <Text>{link.description}</Text>}
            </Link>
          ))}
        </VStack>
      </Collapse>
    </VStack>
  );
}

export default CollapsibleSection;
