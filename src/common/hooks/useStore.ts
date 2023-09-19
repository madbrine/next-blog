import { useContext } from "react";
import { StoreContext } from "@/pages/_app";

export default function useStore() {
    return useContext(StoreContext);
}