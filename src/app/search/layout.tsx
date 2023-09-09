import React, { Suspense } from "react"
import SearchLoading from "./loading"

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Suspense>
            {children}
        </Suspense>
    )
}
export default layout