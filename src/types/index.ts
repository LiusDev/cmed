export interface Category {
    id: number
    createdAt: string
    modifiedAt: string
    name: string
    nameJP: string
    nameEN: string
    documents: any
    news: News[]
}

export interface News {
    id: number
    createdAt: string
    modifiedAt: string
    title: string
    description: string
    featuredImage: string
    content: string
    view: number
    category: Exclude<Category, "documents" | "news">
}

export interface Document {
    id: number
    createdAt: string
    modifiedAt: string
    name: string
    nameJP: string
    nameEN: string
    description: string
    descriptionJP: string
    descriptionEN: string
    featuredImage: string
    document: string
    view: number
    download: number
    pages: number
    category: Exclude<Category, "documents" | "news">
}

export interface Customer {
    id: number
    createdAt: string
    modifiedAt: string
    name: string
    description: string
    image: string
    logo: string
    icon: string
}

export interface Partner {
    id: number
    createdAt: string
    modifiedAt: string
    name: string
    image: string
}

export interface Project {
    id: number
    createdAt: string
    modifiedAt: string
    name: string
    featuredImage: string
    description: string
    subtitle: string
    content: string
    images: string[]
}

export interface Images {
    createdAt: string
    id: number
    image: string
    modifiedAt: string
}

export interface Service {
    id: number
    createdAt: string
    modifiedAt: string
    name: string
    description: string
    logo: string
    featuredImage: string
    featuredImage2: string
    content: string
}

export interface Staff {
    id: number
    createdAt: string
    modifiedAt: string
    name: string
    position: string
    featuredImage: string
    description: string
}

export interface Metadata {
    id: number
    companyName: string
    companyPhone: string
    companyEmail: string
    companyAddress: string
}

export const isPersonalLabel = (isPersonal: boolean) => {
    return isPersonal ? "Cá nhân" : "Tổ chức"
}

export interface Contact {
    id: number
    createdAt: string
    modifiedAt: string
    name: string
    email: string
    phone: string
    company: string
    isPersonal: boolean
    content: string
}

export interface Recruitment {
    id: number
    createdAt: string
    modifiedAt: string
    title: string
    deadline: string
    content: string
}

export interface CreateContactDto {
    name: string
    email: string
    phone: string
    company: string
    customerType: string
    content: string
}

export interface Banner {
    id: string
    image: string
    name: string
}

export type About = {
    title1: string
    subtitle: string
    featuredImage: string
    featuredButtonTitle: string
    featuredButtonTitle2: string
    tabTitle1: string
    tabTitle2: string
    tabTitle3: string
    title2: string
    content2: string[]
    image2: string
    quotes1: {
        content: string
        author: string
        background: string
    }
    quotes2: {
        title: string
        content: string
        image: string
    }[]
}

export type Service2Content = {
    title: string
    content: string
    featuredImage: string
    featuredImage2: string
    index: number
    logo: string
}

export type Service2 = {
    id: number

    createdAt: Date

    modifiedAt: Date

    name: string

    description: string

    index: number

    showInHome: boolean

    content: Service2Content[]

    category: {
        id: number
        name: string
    }
}
