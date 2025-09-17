export default function BiomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='fr'>
			<body>
				{/* Layout UI */}
				{/* Place children where you want to render a page or nested layout */}
				<main>
					<main>{children}</main>
				</main>
			</body>
		</html>
	);
}
