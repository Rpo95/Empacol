import { MouseEventHandler } from "react";

export interface CustomButtomProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean;
}

export interface ButtonSidebarProps {
    title: string;
    src: string
    onClick?: any
}

export interface DescriptionProps {
    activeImage: any;
}

export interface DescriptionCratesProps {
    activeImage: any;
}

export interface SliderProps {
    clickNext: any;
    clickPrev: any;
}

export interface CardServiceProps {
    src: string;
    p: string;
    href: string;
   
}
export interface CardSuppliesProps {
    type: any;
 
   
}

export interface CardCatalogProps {
    catalog: {
        title: string;
        href: string;
    };
}

