import TraitCardLayout from "@/ui/layouts/TraitCardLayout";
import Shield2IconComponent from "../../public/icons/Shield2IconComponent";

export default function Home() {
    return (
        <>
            <TraitCardLayout icon={<Shield2IconComponent/>} serialNo={"01"} bigText={"BIG TEXT"}
                             smallText={"this is small text"}
                             bodyText={"this is body text. this is body text. this is body text."}
                             colorScheme={"colorScheme1"}/>
        </>
    );
}
