import { Button, Trans } from "@/components/common"
import { MainLayout } from "@/components/layout"
import React from "react"
import { MdArrowForward } from "react-icons/md"
import { useForm } from "@mantine/form"
import { doPost } from "@/utils"
import { notifications } from "@mantine/notifications"
import { CreateContactDto } from "@/types"

const Contact = () => {
    const form = useForm({
        initialValues: {
            isPersonal: true,
            name: "",
            phone: "",
            company: "",
            email: "",
            content: "",
        },

        validate: {
            name: (value) =>
                value.trim().length > 0 ? null : "Vui lòng nhập tên",
            phone: (value) =>
                value.trim().length > 0 ? null : "Vui lòng nhập số điện thoại",
            company: (value) =>
                value.trim().length > 0 ? null : "Vui lòng nhập tên công ty",
            email: (value) =>
                /^\S+@\S+$/.test(value)
                    ? null
                    : "Vui lòng nhập đúng định dạng email",
            content: (value) =>
                value.trim().length > 0
                    ? null
                    : "Vui lòng nhập nội dung tin nhắn",
        },
    })

    const handleChangeSelect = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        let value = true
        if (event.target.value === "false") {
            value = false
        } else {
            value = true
        }
        form.setFieldValue("isPersonal", value)
    }

    const handleSubmit = async () => {
        form.validate()

        if (!form.isValid()) {
            notifications.show({
                title: "Không thể gửi tin nhắn",
                message: Object.values(form.errors)[0],
                color: "red",
            })
            return
        }

        const { data, error } = await doPost<CreateContactDto>(
            "/contacts",
            form.values
        )
        if (error) {
            notifications.show({
                title: "Không thể gửi tin nhắn",
                message: "Vui lòng thử lại sau",
                color: "red",
            })
        } else {
            notifications.show({
                title: "Gửi tin nhắn thành công",
                message: "Chúng tôi sẽ liên hệ với bạn sớm nhất có thể",
                color: "green",
            })
            form.reset()
        }
    }

    return (
        <MainLayout>
            <div className="container m-auto px-4 mt-28">
                <h1 className="pb-8 mb-20 text-center border-b border-tertiary/50 text-2xl md:text-4xl uppercase">
                    <Trans text="contact.title" />
                </h1>
                <img src="/contact/map.png" alt="Map" className="my-20" />
                <h2 className="text-center mb-8 text-lg md:text-2xl">
                    <Trans text="contact.description" />
                </h2>
                <div className="grid grid-cols-2 gap-x-16 gap-y-8 w-full max-w-3xl m-auto mb-20">
                    <div className="col-span-2 grid grid-cols-2 gap-x-16">
                        <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                            <label htmlFor="" className="font-medium">
                                <Trans text="contact.form.userType.label" />
                            </label>
                            <select
                                className="border-b border-tertiary outline-none pb-1"
                                onChange={handleChangeSelect}
                            >
                                <option value="true">
                                    <Trans text="contact.form.userType.options.personal" />
                                </option>
                                <option value="false">
                                    <Trans text="contact.form.userType.options.hospital" />
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                        <label htmlFor="" className="font-medium">
                            <Trans text="contact.form.name" />
                        </label>
                        <input
                            type="text"
                            className="border-b border-tertiary outline-none pb-1"
                            {...form.getInputProps("name")}
                        />
                    </div>
                    <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                        <label htmlFor="" className="font-medium">
                            <Trans text="contact.form.phone" />
                        </label>
                        <input
                            type="text"
                            className="border-b border-tertiary outline-none pb-1"
                            {...form.getInputProps("phone")}
                        />
                    </div>
                    <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                        <label htmlFor="" className="font-medium">
                            <Trans text="contact.form.company" />
                        </label>
                        <input
                            type="text"
                            className="border-b border-tertiary outline-none pb-1"
                            {...form.getInputProps("company")}
                        />
                    </div>
                    <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                        <label htmlFor="" className="font-medium">
                            <Trans text="contact.form.email" />
                        </label>
                        <input
                            type="text"
                            className="border-b border-tertiary outline-none pb-1"
                            {...form.getInputProps("email")}
                        />
                    </div>
                    <div className="flex flex-col gap-2 col-span-2">
                        <label htmlFor="" className="font-medium">
                            <Trans text="contact.form.message" />
                        </label>
                        <textarea
                            className="bg-tertiary-light/10 rounded-md outline-none p-6 h-60"
                            {...form.getInputProps("content")}
                        ></textarea>
                    </div>
                    <Button
                        className="col-span-2"
                        variant="outline"
                        onClick={handleSubmit}
                    >
                        <Trans text="contact.form.send" /> <MdArrowForward />
                    </Button>
                </div>
            </div>
        </MainLayout>
    )
}

export default Contact
