import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import linksData from "_data/links.json";

const DynamicCollapsibleSection = dynamic(() => import("./CollapsibleSection"), {
	ssr: false,
	loading: () => <p>Loading...</p>,
});

export default function Home() {
	return (
		<Box p={8} bgColor="blue.50" minHeight="100vh">
			<Heading textAlign="center" mb={6} color="blue.900">
				כותרת
			</Heading>

			<SimpleGrid columns={4} spacing={10}>
				{linksData.map((category, catIndex) =>
					category.subCategories.map((subCategory, subCatIndex) => (
						<DynamicCollapsibleSection key={subCatIndex} subCategory={subCategory} />
					)),
				)}
			</SimpleGrid>

			<Box mt={10}>
				<Heading textAlign="center" color="blue.900">
					סוף העמוד
				</Heading>
			</Box>
		</Box>
	);
}
