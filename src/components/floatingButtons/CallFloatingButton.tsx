import { FiPhoneForwarded } from "react-icons/fi"
import FloatingButton from "./FloatingButton"

interface CallFloatingButtonProps {
	phone: string
}

export default function CallFloatingButton({ phone }: CallFloatingButtonProps) {
	return <FloatingButton>
		<a href={`tel:${phone}`} className="cursor-pointer bg-primary-light text-secondary animate-bounce shadow flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 z-50">
			<FiPhoneForwarded style={{ color: "white" }} />
		</a>
	</FloatingButton>
}