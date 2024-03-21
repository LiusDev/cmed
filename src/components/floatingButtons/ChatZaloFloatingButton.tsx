"use client"

import FloatingButton from "./FloatingButton"
import zaloSVG from "@/../public/zalo.svg"
import { isMobile } from "react-device-detect"

interface ChatZaloFloatingButtonProps {
	userId: string
	className?: string
}

export default function ChatZaloFloatingButton({ userId, className }: ChatZaloFloatingButtonProps) {

	return <FloatingButton className={`${className} ${isMobile ? "hidden" : ""}`}>
		<a target="_blank" href={`http://zalo.me/${userId}`} className="cursor-pointer bg-primary-light text-secondary animate-bounce shadow flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 z-50 absolute  h-[40px] w-[40px]">
			<img src={zaloSVG.src} title="zalo icon" className="object-fill" />
		</a>
	</FloatingButton>
}