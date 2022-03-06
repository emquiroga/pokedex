import Image from "next/image";
import { TypeIcon } from "../TypeIcon";
import styles from "./index.module.css"

interface CardTypes {
    name: string;
    image: string;
    id: number;
    types: Array<{}>;
}

export const Card = ({ name, image, id, types }: CardTypes) => {
    console.log(types)
    return (
        <div className={styles["card-wrapper"]}>
            <h1 className={styles["card-title"]}>{name}</h1>
            <Image width="200" height="200" src={image} alt={name} />
            {
                types && (
                    <div className={styles["types-wrapper"]}>
                        {
                            types.map(() => {
                                return <TypeIcon key={undefined} />
                            })
                        }
                    </div>
                )
            }
            <p className={styles["card-id"]}>{id}</p>
        </div>
    );
}