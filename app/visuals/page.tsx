import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import Photos from "@/components/Photos";

export default function VisualsPage() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				{/* <h1 className={title()}>Make&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
				<br /> */}
				<Link
					href="https://portfolio-seven-pied-56.vercel.app/projects"
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow"})}
				>Return</Link> <br/><br/>
				<h1 className={title()}>
					Creative Visuals
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					<b>Built with: </b>
					AI Computing, Photoshop, Illustrator, Next UI
				</h2>
				
			</div>

			<div className="mt-8">
				<Photos />
			</div>

		</section>
	);
}
