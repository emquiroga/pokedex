import Image from "next/image";
import { TypeIcon } from "../TypeIcon";
import styles from "./index.module.css"

interface CardTypes {
    name: string;
    image: string;
    id: number;
    types: Array<{}>;
}

export const Card = (props: CardTypes) => {
    const { types } = props;
    console.log(types)
    return (
        <div className={styles["card-wrapper"]}>
            <h1 className={styles["card-title"]}>{props.name}</h1>
            <Image width="200" height="200" src={props.image} alt={props.name} />
            {
                types && (
                    <div className={styles["types-wrapper"]}>
                        {
                            types.map(({ }) => {
                                return <TypeIcon key={undefined} />
                            })
                        }
                    </div>
                )
            }
            <p>{props.id}</p>
        </div>
    );
}