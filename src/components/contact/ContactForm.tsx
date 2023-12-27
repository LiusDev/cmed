import { FiGlobe, FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import { IoMailOpenOutline } from "react-icons/io5";
import { Button, Trans } from "../common";
import { Metadata } from "@/types";
import { useTranslation } from "react-i18next";
import { useForm } from "@mantine/form";
import { instance } from "@/utils";

const ContactForm = ({ metadata }: { metadata: Metadata }) => {
    const { t } = useTranslation();

    const form = useForm({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            company: "",
            isPersonal: true,
            content: "",
        },
        validate: {
            name: (value) => value.trim().length > 0,
            // check phone is phone number
            phone: (value) => value.trim().length > 0 && !isNaN(+value),
            email: (value) => value.trim().length > 0,
            company: (value) => value.trim().length > 0,
            isPersonal: (value) => value,
            content: (value) => value.trim().length > 0,
        },
    });

    const handleSendContact = () => {
        console.log(form.values);

        instance
            .post("/contacts", form.values)
            .then((res) => {
                if (res.data) {
                    alert("Gửi liên hệ thành công");
                } else {
                    alert("Gửi liên hệ thất bại");
                }
            })
            .catch((err) => {
                alert("Gửi liên hệ thất bại");
                console.log(err);
            });
    };
    return (
        <section className="bg-secondary-dark">
            <div className="m-auto container px-4 grid grid-cols-12 lg:gap-8">
                <div className="col-span-12 lg:col-span-5 pt-8 order-2 lg:order-1 mb-10 lg:mb-0">
                    <div className="bg-secondary rounded-xl p-12">
                        <h3 className="text-center lg:text-left text-xl lg:text-3xl text-primary font-bold mb-6">
                            <Trans text="contact.contactInfo" />
                        </h3>
                        <ul className="flex-col flex gap-4">
                            <li className="flex items-center gap-2">
                                <div className="bg-primary-dark w-6 h-6 rounded-full flex items-center justify-center">
                                    <FiPhone className="text-secondary" />
                                </div>
                                <p className="text-primary">
                                    <span className="mr-1">
                                        <Trans text="common.sitePhoneLabel" />:
                                    </span>
                                    <a
                                        href={`phone:${metadata?.companyPhone}`}
                                        className="text-sm"
                                    >
                                        {metadata?.companyPhone || "1900 0000"}
                                    </a>
                                </p>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="bg-primary-dark w-6 h-6 rounded-full flex items-center justify-center">
                                    <FiGlobe className="text-secondary" />
                                </div>
                                <p className="text-primary">
                                    <span className="mr-1">
                                        <Trans text="common.siteWebLabel" />:
                                    </span>
                                    <a href="#" className="text-sm">
                                        {"cmed.com.vn"}
                                    </a>
                                </p>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="bg-primary-dark w-6 h-6 rounded-full flex items-center justify-center">
                                    <FiMail className="text-secondary" />
                                </div>
                                <p className="text-primary">
                                    <span className="mr-1">
                                        <Trans text="common.siteEmailLabel" />:
                                    </span>
                                    <a
                                        href={`mailto:${metadata?.companyEmail}`}
                                        className="text-sm"
                                    >
                                        {metadata?.companyEmail ||
                                            "email@abc.xyz"}
                                    </a>
                                </p>
                            </li>
                            <li className="flex items-center gap-2">
                                <div className="bg-primary-dark w-6 h-6 px-1 rounded-full flex items-center justify-center">
                                    <FiMapPin className="text-secondary" />
                                </div>
                                <p className="text-primary">
                                    <span className="mr-1">
                                        <Trans text="common.siteAddressLabel" />
                                        :
                                    </span>
                                    <span className="text-sm text-justify">
                                        {metadata?.companyAddress || "Hanoi"}
                                    </span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="order-1 lg:order-2 col-span-12 lg:col-span-7 relative lg:mb-10">
                    <div className="absolute -top-40 h-40 left-0 right-0 bg-secondary-dark z-30 hidden lg:flex items-center justify-center gap-4 p-8 rounded-t-xl">
                        <div className="bg-primary-dark p-2 rounded-md">
                            <IoMailOpenOutline className="text-secondary text-8xl" />
                        </div>
                        <p className="text-primary text-lg text-justify">
                            <Trans text="contact.info" />
                        </p>
                    </div>
                    <div className="bg-secondary rounded-b-xl p-4 lg:p-12">
                        <div className="grid grid-cols-2 gap-4 lg:gap-8 mb-6 lg:mb-10">
                            <input
                                placeholder={t("contact.form.name")}
                                type="text"
                                {...form.getInputProps("name")}
                                className="col-span-2 lg:col-span-1 w-full bg-secondary-dark rounded-md px-4 py-2"
                            />
                            <input
                                placeholder={t("contact.form.phone")}
                                type="text"
                                {...form.getInputProps("phone")}
                                className="col-span-2 lg:col-span-1 w-full bg-secondary-dark rounded-md px-4 py-2"
                            />
                            <input
                                placeholder={t("contact.form.email")}
                                type="text"
                                {...form.getInputProps("email")}
                                className="col-span-2 lg:col-span-1 w-full bg-secondary-dark rounded-md px-4 py-2"
                            />
                            <select
                                name="isPersonal"
                                id="isPersonal"
                                {...form.getInputProps("isPersonal")}
                                className="col-span-2 lg:col-span-1 w-full bg-secondary-dark rounded-md px-4 py-2"
                            >
                                <option value="true">
                                    {t("contact.form.type.personal")}
                                </option>
                                <option value="false">
                                    {t("contact.form.type.company")}
                                </option>
                            </select>
                            <input
                                placeholder={t("contact.form.company")}
                                type="text"
                                {...form.getInputProps("company")}
                                className="col-span-2 w-full bg-secondary-dark rounded-md px-4 py-2"
                            />
                            <textarea
                                placeholder={t("contact.form.message")}
                                name=""
                                id=""
                                rows={8}
                                {...form.getInputProps("content")}
                                className="w-full bg-secondary-dark rounded-md px-4 py-2 col-span-2 focus:outline-none"
                            ></textarea>
                        </div>
                        <div className="mb-6 lg:mb-10">
                            <Button
                                onClick={handleSendContact}
                                className="px-4 py-2 lg:px-2 lg:py-1 flex items-center justify-center gap-1 m-auto"
                            >
                                <Trans text="common.send" />
                                <FiSend />
                            </Button>
                        </div>
                        <p className="flex flex-col lg:flex-row gap-1 items-center justify-center text-primary">
                            <span className="text-center text-sm lg:text-base">
                                <Trans text="contact.form.note" />
                            </span>
                            <span className="font-semibold">
                                {metadata?.companyEmail || "email@abc.xyz"}
                            </span>
                        </p>
                    </div>
                </div>
                <div className="order-3 col-span-12 bg-secondary rounded-xl p-12 flex items-center justify-center gap-6 mb-16">
                    <h3 className="text-xl lg:text-3xl text-primary font-bold mb-6">
                        <Trans text="contact.map" />
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
