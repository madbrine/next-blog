import { IPublication } from "@/common/types/IPublication";
import { IPublicationsList } from "@/common/types/IPublicationsList";
import { network } from "@/common/utils/network";
import { useEffect, useState } from "react";
import PublicationCard from "../../components/publication-card";
import s from './styles.module.css';

function PublicationsScreen() {
    const [publData, setPublData] = useState<IPublicationsList>({
        publications: [],
        totalCount: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await network.get.publications(0);
                setPublData(response);
                console.log(response)
            } catch (error) {
                console.error("Error fetching publications:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={s['container']}>
            {publData.publications.map((data, key) => (
                <PublicationCard data={data} key={data.date} />
            ))}
        </div>
    );
}

export default PublicationsScreen;