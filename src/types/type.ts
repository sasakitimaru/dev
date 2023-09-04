export interface Mode {
    mode: 'dark' | 'light' | 'system'
}

export type Selected = {
    [key in Mode['mode']]: boolean
}

export type Article = {
    id: string
    title: string
    slug: string
    icon: string
    description?: string
    date: string
    categories: string[]
}