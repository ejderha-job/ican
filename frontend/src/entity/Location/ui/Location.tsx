"use server"
import {Select} from "@radix-ui/themes";
import axios from "axios";

interface LocationProps {
    locationID: number
}

export default async (props: LocationProps) => {
    const {locationID} = props
    const cities = (await axios.get("http://backend:9000/countries")).data
    return <Select.Root defaultValue={String(locationID)}>
        <Select.Trigger/>
        <Select.Content>
            {cities?.map(city => <Select.Item value={String(city.id)}>{city.title}</Select.Item>)}
        </Select.Content>
    </Select.Root>
}