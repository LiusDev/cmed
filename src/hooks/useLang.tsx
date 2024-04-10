import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export default function () {
	const { t, i18n } = useTranslation();
	const currentLanguage = useMemo(() => {
		switch (i18n.language) {
			case "en":
				return "EN";
			case "jp":
				return "JP";
			default:
				return "";
		}
	}, [i18n.language])
	return { t, currentLanguage };
}