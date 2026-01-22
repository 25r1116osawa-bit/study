'use client'
import Text from "@/app/components/Text"
import { useSearchParams } from "next/navigation";


export default () => {
    const searchParams = useSearchParams();
    return (<>
        <h2>TOPページ</h2>
        <Text text={searchParams.get('msg') as string} />
    </>)
}