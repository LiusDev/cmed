import { Button, Trans } from "@/components/common"
import { MainLayout } from "@/components/layout"
import React from "react"
import { MdArrowForward } from "react-icons/md"

const Contact = () => {
    return (
        <MainLayout>
            <div className="container m-auto px-4 mt-28">
                <h1 className="pb-8 mb-20 text-center border-b border-tertiary/50 text-4xl uppercase">
                    <Trans text="contact.title" />
                </h1>
                <img src="/contact/map.png" alt="Map" className="my-20" />
                <h2 className="text-center mb-8 text-2xl">
                    <Trans text="contact.description" />
                </h2>
                <form className="grid grid-cols-2 gap-x-16 gap-y-8 w-full max-w-3xl m-auto mb-20">
                    <div className="col-span-2 grid grid-cols-2 gap-x-16">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-medium">
                                <Trans text="contact.form.userType.label" />
                            </label>
                            <select className="border-b border-tertiary outline-none">
                                <option value="true">
                                    <Trans text="contact.form.userType.options.personal" />
                                </option>
                                <option value="false">
                                    <Trans text="contact.form.userType.options.hospital" />
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-medium">
                            <Trans text="contact.form.name" />
                        </label>
                        <input
                            type="text"
                            className="border-b border-tertiary outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-medium">
                            <Trans text="contact.form.phone" />
                        </label>
                        <input
                            type="text"
                            className="border-b border-tertiary outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-medium">
                            <Trans text="contact.form.company" />
                        </label>
                        <input
                            type="text"
                            className="border-b border-tertiary outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="" className="font-medium">
                            <Trans text="contact.form.email" />
                        </label>
                        <input
                            type="text"
                            className="border-b border-tertiary outline-none"
                        />
                    </div>
                    <div className="flex flex-col gap-2 col-span-2">
                        <label htmlFor="" className="font-medium">
                            <Trans text="contact.form.message" />
                        </label>
                        <textarea className="bg-tertiary-light/10 rounded-md outline-none p-6 h-60"></textarea>
                    </div>
                    <Button className="col-span-2" variant="outline">
                        <Trans text="contact.form.send" /> <MdArrowForward />
                    </Button>
                </form>
            </div>
        </MainLayout>
    )
}

export default Contact
