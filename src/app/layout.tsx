import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "../reactComponents/NavigationBar";
import Footer from "../reactComponents/Footer";

const robotoMono = Roboto_Mono({
	variable: "--font-roboto-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Romane Boireau Portfolio",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='fr'
			className={robotoMono.className}>
			<body>
				<NavigationBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
