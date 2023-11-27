import React from "react"
import { useTranslation } from "react-i18next"
import { Select } from "@mantine/core"

const dataLanguage = [
    {
        value: "vi",
        label: "VI",
    },
    {
        value: "en",
        label: "ENG",
    },
    {
        value: "jp",
        label: "JP",
    },
]
const SwitchLanguage = () => {
    const { i18n } = useTranslation()

    const handleChangeLanguage = (value: string | null = "vi") => {
        i18n.changeLanguage(value!)
    }

    return (
        <Select
            withCheckIcon={false}
            data={dataLanguage}
            defaultValue={i18n.language}
            onChange={(value) => handleChangeLanguage(value)}
            style={{ width: 100 }}
            allowDeselect={false}
        />
    )
}

export default SwitchLanguage
