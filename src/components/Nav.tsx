"use client";

import { IconMenu2, IconSearch, IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";

type Item = {
	heading: string;
	text: string;
	href: string;
};

type NavItem = {
	title: string;
	items: Item[];
};

const navItems: NavItem[] = [
	{ title: "Lobby", items: [{ heading: "1", text: "5", href: "/" }] },
	{
		title: "Clothing",
		items: [
			{
				heading: "T-shirts",
				text: "Lorem ipsum dolor sit amet.",
				href: "/",
			},
			{
				heading: "Hoodies",
				text: "Lorem ipsum dolor sit amet.",
				href: "/",
			},
			{ heading: "Hats", text: "Lorem ipsum dolor sit amet.", href: "/" },
			{
				heading: "Colab",
				text: "Limited edition collaborations with popular JDM influencers",
				href: "/",
			},
		],
	},
	{
		title: "Gadgets",
		items: [
			{ heading: "Posters", text: "JDM car posters", href: "/" },
			{ heading: "Decals", text: "JDM car decals", href: "/" },
			{ heading: "Stickers", text: "JDM car stickers", href: "/" },
			{ heading: "Keychains", text: "JDM car keychains", href: "/" },
		],
	},
];

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="z-50 bg-background sticky top-0 flex w-full items-center border-b p-4 px-6">
			<div className="mr-6 h-4 w-4 bg-red-600" />
			<div className="grow lg:hidden" />

			<div className="hidden grow lg:block">
				<NavigationMenu>
					<NavigationMenuList>
						{navItems.map((item, key) => (
							<NavigationMenuItem key={key}>
								<NavigationMenuTrigger>
									{item.title}
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{item.items.map((el, elKey) => (
											<ListItem
												key={elKey}
												title={el.heading}
												href={"/"}
											>
												{el.text}
											</ListItem>
										))}
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
						))}
					</NavigationMenuList>
				</NavigationMenu>
			</div>

			<button className="rounded-md border border-white/60 bg-slate-950 p-2 shadow-md">
				<IconSearch size={18} />
			</button>
			<button className="ml-2 rounded-md border border-white/60 bg-slate-950 p-2 shadow-md">
				<IconShoppingCart size={18} />
			</button>

			<Sheet open={isOpen} onOpenChange={setIsOpen}>
				<SheetTrigger asChild>
					<button
						className="z-20 ml-4 lg:hidden"
						onClick={() => setIsOpen(!isOpen)}
					>
						<IconMenu2 size={24} />
						<span className="sr-only">Toggle Menu</span>
					</button>
				</SheetTrigger>
				<SheetContent>
					<ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
						<div className="pl-1 pr-7">
							<Accordion
								type="multiple"
								defaultValue={navItems.map(
									(item) => item.title
								)}
								className="w-full"
							>
								{navItems.map((item, index) => (
									<AccordionItem
										value={item.title}
										key={index}
									>
										<AccordionTrigger className="text-sm capitalize">
											{item.title}
										</AccordionTrigger>
										<AccordionContent>
											<div className="flex flex-col space-y-2">
												{item.items.map((el, index) =>
													el.href ? (
														<MobileLink
															key={index}
															href={String(
																el.href
															)}
															segment={String(1)}
															setIsOpen={
																setIsOpen
															}
														>
															{el.heading}
														</MobileLink>
													) : (
														<div
															key={index}
															className="text-foreground/70 transition-colors"
														>
															{el.heading}
														</div>
													)
												)}
											</div>
										</AccordionContent>
									</AccordionItem>
								))}
							</Accordion>
						</div>
					</ScrollArea>
				</SheetContent>
			</Sheet>

			<Button className="ml-2 hidden lg:block">Sign in</Button>
		</header>
	);
};

export default Nav;

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link
					ref={ref}
					href={String(href)}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">
						{title}
					</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
});

ListItem.displayName = "ListItem";

interface MobileLinkProps extends React.PropsWithChildren {
	href: string;
	disabled?: boolean;
	segment: string;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileLink({
	children,
	href,
	disabled,
	segment,
	setIsOpen,
}: MobileLinkProps) {
	return (
		<Link
			href={href}
			className={cn(
				"text-foreground/70 transition-colors hover:text-foreground",
				href.includes(segment) && "text-foreground",
				disabled && "pointer-events-none opacity-60"
			)}
			onClick={() => setIsOpen(false)}
		>
			{children}
		</Link>
	);
}
