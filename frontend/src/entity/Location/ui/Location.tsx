import {Select} from "@radix-ui/themes";

interface LocationProps {
    locationID: number
}

export const Location = (props: LocationProps) => {
    const {locationID} = props
    const cities = []
    return <Select.Root defaultValue={String(locationID)}>
        <Select.Trigger/>
        <Select.Content>
            {cities?.map(city => <Select.Item value={String(city.id)}>{city.title}</Select.Item>)}
        </Select.Content>
    </Select.Root>
}