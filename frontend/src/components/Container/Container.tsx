import { ReactNode } from "react";


type Props = {
    children: ReactNode;
};

export function Container({ children }: Props){
    return <div className="px-2 md:px-56 py-4 mx-auto w-full h-full"> {children} </div>    
}