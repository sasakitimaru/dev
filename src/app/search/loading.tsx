import React from "react"
import { Skeleton } from "@mui/material"

const ArticleCardSkeleton = () => {
    return (
        <div className="flex items-center">
            <div className="flex flex-shrink-0 justify-center items-center rounded-lg w-20 h-20 overflow-hidden">
                <Skeleton variant="rectangular" width={100} height={100} className="rounded"/>
            </div>
            <div className="flex flex-col ml-4 gap-x-2 overflow-hidden">
                <Skeleton variant="rectangular" width={200} height={20} className="mb-4"/>
                <Skeleton variant="rectangular" width={200} height={10}/>
            </div>
        </div>
    )
}

const Loading = () => {
    return (
        <div className="flex flex-col bg-white dark:bg-gray-900 min-h-screen py-24 justify-cente items-center px-8 sm:px-20 lg:px-40 mx-auto">
            <Skeleton variant="rectangular" className="w-full max-w-3xl h-10 px-4 p-4 rounded-full" />
            <div className="grid gap-y-8 sm:gap-12 grid-cols-1 sm:grid-cols-2"></div>
            <div className="grid gap-y-8 sm:gap-16 grid-cols-1 sm:grid-cols-2 mt-8">
                <ArticleCardSkeleton />
                <ArticleCardSkeleton />
                <ArticleCardSkeleton />
                <ArticleCardSkeleton />
            </div>
        </div>
    )
}

export default Loading