import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export interface LayoutProps {
    children: ReactNode;
}

//override to use shared layout and set before layout
export type NextPageWithLayout = NextPage & {
    Layout?: (props: LayoutProps) => ReactElement
}

//override to use shared layout and set before layout
export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}