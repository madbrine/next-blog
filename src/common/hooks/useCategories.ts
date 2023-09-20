import { useEffect, useState } from "react";
import { ICategory } from "../types/ICategory";
import { network } from "../utils/network";

function useCategories() {
    const [categories, setCategories] = useState<ICategory[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const result = await network.get.categories();
                setCategories(result); // Update the state with fetched categories
            } catch (error) {
                console.log(error);
            }
        };

        fetchCategories();
        console.log('Fetching categories');
    }, []);

    return categories; // Return the categories
}

export default useCategories;





