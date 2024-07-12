import { Select } from "@radix-ui/themes";

interface LocationProps {
    locationID: number
}

const getLocation = async () => {
    const response = await fetch("http://backend:9000/countries")
    const locations = await response.json()
    return { locations }
}

export default async (props: LocationProps) => {
    const { locationID } = props
    const { locations } = await getLocation()
    return <Select.Root defaultValue={String(locationID)}>
        <Select.Trigger />
        <Select.Content>
            {locations?.map(city => <Select.Item value={String(city.id)}>{city.title}</Select.Item>)}
        </Select.Content>
    </Select.Root>
}