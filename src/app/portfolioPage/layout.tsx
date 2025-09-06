export default function PortfolioLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='fr'>
			<body>
				{/* Layout UI */}
				{/* Place children where you want to render a page or nested layout */}
				<main>{children}</main>
			</body>
		</html>
	);
}
