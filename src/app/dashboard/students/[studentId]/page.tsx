import React from "react";
import StudentLayout from "./layout";
import { Header } from "@/app/components/Header";


interface Props {
    className?: string;
    params : any;
}

export const Page: React.FC<Props> = ({params} : { params : {userId : string}, className : string}) => {

    return (
        <StudentLayout>
            <Header/>
            <div>
                <p>{params.userId}</p>
            </div>
        </StudentLayout>
    );
};

export default Page;
