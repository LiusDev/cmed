import { useTranslation } from "react-i18next";
const Trans = ({ text }: { text: string }) => {
    const { t } = useTranslation();
    return <>{t(`${text}`)}</>;
};

export default Trans;
