import { GET_FLOWERS } from "../../apollo/query/getFlowers";
import { useQuery } from "@apollo/client";

export const useFlowers = () => {
    const { loading, error, data } = useQuery(GET_FLOWERS);

    if (loading) return { loading: true };
    if (error) return { error };

    return { flowers: data.flowersList };
}