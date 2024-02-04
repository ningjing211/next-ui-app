import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import VideosV from "@/components/Videos-v";
import VideosH from "@/components/Videos-h";
import VideosC from "@/components/Videos-c";

import { flushSync } from 'react-dom'


export default function VideoPage() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-5xl text-center justify-center">
				<Link
					href="https://portfolio-seven-pied-56.vercel.app/projects"
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>Return</Link> <br/><br/>
				<h1 className={title()}>
					Animation & Videos
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					<b>Skills with </b><br/>
					Motions, AI Computing, CI Design, Branding, Marketing Shorts & Feeds, After Effects
				</h2>
				
			</div>

			<div className="mt-8">
				{/* <Snippet hideSymbol hideCopyButton variant="flat">
				</Snippet> */}
				<VideosV />
				<VideosH />
				<VideosC />
			</div>
		</section>
	);
}
