export interface Mode {
    mode: 'dark' | 'light' | 'system'
}

export type Selected = {
    [key in Mode['mode']]: boolean
}