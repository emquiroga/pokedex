import Image from "next/image";
import styles from "./index.module.css"

interface CardType {
    name: string;
    image: string;
    id: number;
}

export const Card = (props: CardType) => {
    return (
        <div className={styles["card-wrapper"]}>
            <h1>{props.name}</h1>
            <Image width="200" height="200" src={props.image} alt={props.name} />
            <p>{props.id}</p>
        </div>
    );
}